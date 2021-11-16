import React, { useState, useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_BLOG } from '../apollo/mutations';
import FadeIn from 'react-fade-in';
import { useAlert } from 'react-alert';
import '../styles/admin.css';

type EditAlertPropsType = {
  id: any;
  title: any;
  text: any;
  handler: any;
  desc: any;
};

const EditAlert = ({ id, title, desc, text, handler }: EditAlertPropsType) => {
  const center = {
    margin: '0 auto',
    width: '90%',
    marginTop: '2rem',
  };
  const marked = require('marked');
  const alert = useAlert();
  const [Id, setID] = useState(id);
  const [Title, setTitle] = useState(title);
  const [Description, setDesc] = useState(desc);
  const [Text, setText] = useState(text);
  const [updateBlog] = useMutation(UPDATE_BLOG, {
    onCompleted(data) {
      if (data) {
        alert.show('Edit successfull !');
        window.location.reload();
      }
    },
  });

  function handleChange(evt: any) {
    setTitle(evt.target.value);
  }

  function handleChange2(evt: any) {
    setDesc(evt.target.value);
  }

  function handleChange3(evt: any) {
    setText(evt.target.value);
  }

  function handleSubmit() {
    updateBlog({
      variables: { id: Id, title: Title, description: Description, text: Text },
    });
  }

  return (
    <div>
      <FadeIn>
        <div style={center}>
          <h4 className="alert alert-info">
            Edit {title}{' '}
            <span className="icon">
              <i className="fas fa-window-close" onClick={handler}></i>
            </span>
          </h4>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Blog Title
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Ex: An Overview of India's education system"
              value={Title}
              onChange={handleChange}
            ></input>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Description</span>
            <input
              type="text"
              className="form-control"
              placeholder="Ex: Let me start by saying that the current statistics are showing that the education system is outdated, inefficient and a danger to human health"
              value={Description}
              onChange={handleChange2}
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
                value={Text}
                onChange={handleChange3}
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
    </div>
  );
};

export default EditAlert;
