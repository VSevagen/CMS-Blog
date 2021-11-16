import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import '../styles/admin.css';
import Header from './Header';
import FadeIn from 'react-fade-in';
import Loader from 'react-loader-spinner';
import EDtab from './EDtab';
import Unauthorised from './Unauthorised';
import ProjectEditor from './ProjectEditor';
import Footer from './Footer';
import AboutEditor from './AboutEditor';
import { FETCH_PROJECT, FETCH_BLOG, FETCH_ABOUT } from '../apollo/queries';
import { CREATE_NEW_BLOG } from '../apollo/mutations';
import { Heading, Button, toaster } from 'evergreen-ui';

const Admin = () => {
  const marked = require('marked');
  const location = useLocation();
  let authenticated = null;
  if (location.state === undefined) {
    authenticated = false;
  } else {
    authenticated = true;
  }

  const center = {
    margin: '0 auto',
    width: '70%',
  };
  const [addBlog] = useMutation(CREATE_NEW_BLOG, {
    onCompleted(data) {
      if (data) {
        toaster.success('Blog has been submitted');
        window.location.reload();
      }
    },
  });
  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const [text, setText] = useState('');
  const [date, setDate] = useState('');
  const [blog, setBlog] = useState(false);
  const [project, setProj] = useState(false);
  const [about, setAbout] = useState(false);

  // define DOM consts
  const blogDOM = document.getElementById('blog');
  const projectDOM = document.getElementById('project');

  function handleSubmit() {
    var Sentiment = require('sentiment');
    var sentiment = new Sentiment();
    var result = sentiment.analyze(text);

    if (result.comparative < 0) {
      toaster.danger('Malicious text detected');
    } else {
      addBlog({
        variables: {
          title: title,
          description: description,
          text: text,
          date: date,
        },
      });
      setText('');
      setTitle('');
      setDate('');
      setDesc('');
    }
  }

  function handleNewBlog() {
    setBlog(!blog);

    if (!blog && blogDOM !== null) {
      blogDOM.scrollIntoView();
    }
  }

  function handleNewProject() {
    setProj(!project);

    if (!project && projectDOM !== null) {
      projectDOM.scrollIntoView();
    }
  }

  const {
    loading: loadingBlog,
    error: errorBlog,
    data: dataBlog,
  } = useQuery(FETCH_BLOG);
  const {
    loading: loadingProject,
    error: errorProject,
    data: dataProject,
  } = useQuery(FETCH_PROJECT);
  const {
    loading: loadingAbout,
    error: errorAbout,
    data: dataAbout,
  } = useQuery(FETCH_ABOUT);

  if (loadingBlog || loadingProject || loadingAbout) {
    return (
      <div className="spinner">
        <Loader type="Grid" color="#9c9c9c" height={80} width={80} />
      </div>
    );
  }
  if (errorBlog || errorProject || errorAbout) {
    return `Error! ${errorBlog !== undefined && errorBlog.message}, ${
      errorProject !== undefined && errorProject.message
    } , ${errorAbout !== undefined && errorAbout.message}`;
  }

  return (
    <div>
      {authenticated ? (
        <div>
          <Header LoggedIn={authenticated} />
          <div style={{marginTop: "3rem"}}>
            <div className="tab">
              <Heading size={900} textAlign="left"
              display="inline-block">
                Blog Section
              </Heading>
              <Button
                appearance="primary"
                intent="none"
                float="right"
                height={40}
                onClick={handleNewBlog}
              >
                New Blog
              </Button>
            </div>

            <div>
              {dataBlog.blogs.map((blog: any) => (
                <EDtab
                  title={blog.title}
                  id={blog._id}
                  desc={blog.description}
                  text={blog.text}
                  type="blog"
                ></EDtab>
              ))}
            </div>
          </div>

          <div id="blog">
            {blog ? (
              <FadeIn>
                <div>
                  <h2>Create a new blog</h2>
                </div>

                <div style={center}>
                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">
                      Blog Title
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ex: An Overview of India's education system"
                      value={title}
                      onChange={(evt: any) => setTitle(evt.target.value)}
                    ></input>
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon3">
                      Date
                    </span>
                    <input
                      type="text"
                      className="form-control"
                      value={date}
                      onChange={(evt: any) => setDate(evt.target.value)}
                      placeholder="Ex: 22 Jun, 2019"
                    ></input>
                  </div>

                  <div className="input-group mb-3">
                    <span className="input-group-text">Description</span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Ex: Let me start by saying that the current statistics are showing that the education system is outdated, inefficient and a danger to human health"
                      value={description}
                      onChange={(evt: any) => setDesc(evt.target.value)}
                    ></input>
                  </div>

                  <div className="row">
                    <div className="input-group col-lg-6">
                      <span className="input-group-text">Blog Text</span>
                      <textarea
                        rows={20}
                        placeholder="IMPORTANT......use the following class for you text. blog_img for images and blog-content"
                        className="form-control"
                        aria-label="With textarea"
                        value={text}
                        onChange={(evt: any) => setText(evt.target.value)}
                      ></textarea>
                    </div>

                    <div
                      className="col-lg-6 preview"
                      dangerouslySetInnerHTML={{ __html: marked(text) }}
                    ></div>
                  </div>

                  <button
                    type="button"
                    id="center"
                    className="btn btn-outline-secondary"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </FadeIn>
            ) : (
              ''
            )}
          </div>

          <div style={{marginTop: "3rem"}}>
            <div className="tab">
              <Heading size={900} textAlign="left" display="inline-block">
                Project Section
              </Heading>
              <Button
                appearance="primary"
                intent="none"
                float="right"
                height={40}
                onClick={handleNewProject}
              >
                New Project
              </Button>
            </div>
            {dataProject.projects.map((project: any) => (
              <EDtab
                title={project.title}
                id={project._id}
                desc={project.desc}
                demolink={project.demolink}
                link={project.link}
                type="project"
              ></EDtab>
            ))}
            <div id="project">
              <ProjectEditor isShown={project} setIsShown={setProj} />
            </div>
          </div>

          <div className="tab">
            <Heading size={900} textAlign="left" display="inline-block">
              About Section
            </Heading>
            <Button
              appearance="primary"
              intent="none"
              float="right"
              height={40}
              onClick={() => setAbout(!about)}
            >
              Update About
            </Button>
          </div>
          <div id="About">
            <AboutEditor
              isShown={about}
              setIsShown={setAbout}
              id={dataAbout.about[0]._id}
              desc={dataAbout.about[0].desc}
              email={dataAbout.about[0].email}
              skills={dataAbout.about[0].skills}
            ></AboutEditor>
          </div>
        </div>
      ) : (
        <Unauthorised></Unauthorised>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Admin;
