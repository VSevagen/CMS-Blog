import React, { useState } from 'react';
import { gql, useMutation, useQuery} from "@apollo/client";
import { useLocation } from "react-router-dom";
import "../styles/admin.css";
import styled from '@emotion/styled';
import Header from './Header';
import { useAlert } from 'react-alert';
import FadeIn from 'react-fade-in';
import Loader from "react-loader-spinner";
import EDtab from './EDtab';
import Unauthorised from './Unauthorised';
import ProjectEditor from './ProjectEditor';
import Footer from './Footer'
import AboutEditor from './AboutEditor'
import { FETCH_PROJECT, FETCH_BLOG, FETCH_ABOUT } from  '../apollo/queries'
import { CREATE_NEW_BLOG } from '../apollo/mutations'

const Tab = styled.div`
border: 2px solid grey;
border-radius: 5px;
margin-top: 3rem;
margin-bottom: 3rem;
padding: 0.6em;
width: 60%;
background-color: #white;
margin-left:20%;
margin-right:20%;
box-shadow: 0 6px 6px -6px #777;
}
`

const ActionButton = styled.button`
float: right;
color: white;
background-color: #1f73b3;
border: 0;
margin-left: 10px;
border-radius: 5px;
padding: 10px;
font-size: 15px;
&:hover {
    border: 1px solid blue;
}
`;

const SectionText = styled.span`
font-size: 30px;
`;


function Admin() {

    const alert = useAlert();
    let marked = require("marked");
    const location = useLocation();
    let authenticated = null;
    if(location.state === undefined) {
        authenticated = false;
    } else {
        authenticated = true;
    }

    var center = {
        margin: "0 auto",
        width: "70%"
    }
    const [addBlog] = useMutation
    (
        CREATE_NEW_BLOG,
        {
            onCompleted(data) {
                if(data) {
                    alert.show("Blog submitted");
                    window.location.reload();
                }
            }
        }
    )
    const[title, setTitle] = useState('')
    const[description, setDesc] = useState('')
    const[text, setText] = useState('')
    const[date, setDate] = useState('')
    const[blog, setBlog] = useState(false);
    const[project, setProj] = useState(false);
    const[about, setAbout] = useState(false);

    function handleSubmit() {
        addBlog({variables: {title: title, description: description, text: text , date: date }});
        setText('')
        setTitle('')
        setDate('')
        setDesc('')
    }

    function handleTitle(evt) {
        setTitle(evt.target.value)
    }

    function handleDesc(evt) {
        setDesc(evt.target.value)
    }

    function handleText(evt) {
        setText(evt.target.value)
    }

    function handleDate(evt) {
        setDate(evt.target.value)
    }

    function handleNewBlog() {
        setBlog(!blog);

        if(!blog) {
            document.getElementById('blog').scrollIntoView();
        }
    }

    function handleNewProject() {
        setProj(!project);

        if(!project) {
            document.getElementById('project').scrollIntoView();
        }
    }

    function handleAboutClick() {
        setAbout(!about);

        if(!about) {
            document.getElementById('About').scrollIntoView();
        }
    }

    const {loading: loadingBlog, error: errorBlog, data: dataBlog} = useQuery(FETCH_BLOG);
    const {loading: loadingProject, error: errorProject, data: dataProject} = useQuery(FETCH_PROJECT);
    const {loading: loadingAbout, error: errorAbout, data: dataAbout} = useQuery(FETCH_ABOUT);

    if(loadingBlog || loadingProject || loadingAbout) return <div className="spinner"><Loader type="Grid" color="#9c9c9c" height={80} width={80}/></div>
    if(errorBlog || errorProject || errorAbout) return `Error! ${errorBlog.error}, ${errorProject.error} , ${errorAbout.error}`;

    console.log(dataAbout);
    return(

    <div>
    {authenticated ?
    <div>
        <Header LoggedIn={authenticated}/>
        <div>
            <Tab><SectionText>Blog Section</SectionText><ActionButton onClick={handleNewBlog}>New Blog</ActionButton></Tab>

            <div>
                {dataBlog.blogs.map(blog => (
                    <EDtab title={blog.title} id={blog._id} desc={blog.description} text={blog.text} type="blog"></EDtab>
                ))}
            </div>
        </div>

        <div id="blog">
        {blog ?
        <FadeIn>
            <div><h2>Create a new blog</h2></div>

            <div style={center}>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Blog Title</span>
                <input type="text" class="form-control" placeholder="Ex: An Overview of India's education system" value={title} onChange={handleTitle}></input>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">Date</span>
                <input type="text" class="form-control" value={date} onChange={handleDate} placeholder="Ex: 22 Jun, 2019"></input>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Description</span>
                <input type="text" class="form-control" placeholder="Ex: Let me start by saying that the current statistics are showing that the education system is outdated, inefficient and a danger to human health" value={description} onChange={handleDesc}></input>
            </div>

            <div class="row">

                <div class="input-group col-lg-6">
                    <span class="input-group-text">Blog Text</span>
                    <textarea rows="20" placeholder="IMPORTANT......use the following class for you text. blog_img for images and blog-content"  class="form-control" aria-label="With textarea" value={text} onChange={handleText}></textarea>
                </div>

                <div class="col-lg-6 preview" dangerouslySetInnerHTML={{__html: marked(text)}}></div>

            </div>

            <button type="button" id="center" class="btn btn-outline-secondary" onClick={handleSubmit}>Submit</button>


            </div>
        </FadeIn>
        : ""}
        </div>

        <div>
            <Tab><SectionText>Project Section</SectionText><ActionButton onClick={handleNewProject}>New Project</ActionButton></Tab>
            {dataProject.projects.map(project => (
                <EDtab title={project.title} id={project._id} desc={project.desc} demolink={project.demolink} link={project.link} type="project"></EDtab>
            ))}
            <div id="project">
                {project ? <ProjectEditor></ProjectEditor> : ""}
            </div>
        </div>

        <Tab><SectionText>About section</SectionText><ActionButton onClick={handleAboutClick}>Update About</ActionButton></Tab>
        <div id="About">
        {about ?
        <AboutEditor id={dataAbout.about[0]._id} desc={dataAbout.about[0].desc} email={dataAbout.about[0].email} skills={dataAbout.about[0].skills} handler={handleAboutClick}></AboutEditor>
        : ""}
        </div>
    </div>
    :
    <Unauthorised></Unauthorised> }
    <Footer></Footer>
    </div>
    );
}

export default Admin;