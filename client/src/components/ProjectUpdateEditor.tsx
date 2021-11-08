import React, { useState } from 'react';
import styled from '@emotion/styled';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useAlert } from 'react-alert';
import FadeIn from 'react-fade-in';
import { UPDATE_PROJECT } from '../apollo/mutations';

const Container = styled.div`
  margin: 2rem auto 0px;
  width: 90%;
`

const Icon = styled.span`
  margin-left: auto;
  font-size: 20px;
  float: right;
  opacity: 0.65;
  &:hover {
    opacity: 1;
  }
`

type ProjectPropsType = {
  id: string;
  title: string;
  desc: string;
  link: string;
  demolink: string;
  handler: any;
}

const ProjectUpdateEditor = ({id, title, desc, link, demolink, handler}: ProjectPropsType) => {
  const alert = useAlert()
  const [Id] = useState(id)
  const [Title, setTitle] = useState(title)
  const [Desc, setDesc] = useState(desc)
  const [Link, setLink] = useState(link)
  const [Demolink, setDemo] = useState(demolink)
  const [updateProject] = useMutation(UPDATE_PROJECT, {
    onCompleted (data) {
      if (data) {
        alert.show('Project updated');
        window.location.reload()
      }
    }
  })

  function handleTitle (evt: any) {
    setTitle(evt.target.value)
  }

  function handleDesc (evt:  any) {
    setDesc(evt.target.value)
  }

  function handlelink (evt: any) {
    setLink(evt.target.value)
  }

  function handledemolink (evt: any) {
    setDemo(evt.target.value)
  }

  function handleSubmit () {
    updateProject({
      variables: {
        id: Id,
        title: Title,
        desc: Desc,
        link: Link,
        demolink: Demolink
      }
    })
  }

  return (
    <div>
      <FadeIn>
        <Container>
          <h4 className="alert alert-info">
            Edit {Title}
            <Icon>
              <i className="fas fa-window-close" onClick={handler}></i>
            </Icon>
          </h4>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Project Title
            </span>
            <input
              type="text"
              className="form-control"
              value={Title}
              onChange={handleTitle}
            ></input>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              Project link
            </span>
            <input
              type="text"
              className="form-control"
              value={Link}
              onChange={handlelink}
            ></input>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              Project Demo link
            </span>
            <input
              type="text"
              className="form-control"
              value={Demolink}
              onChange={handledemolink}
            ></input>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text">Description</span>
            <input
              type="text"
              className="form-control"
              value={Desc}
              onChange={handleDesc}
            ></input>
          </div>

          <button
            type="button"
            id="center"
            className="btn btn-outline-secondary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </Container>
      </FadeIn>
    </div>
  )
}

export default ProjectUpdateEditor
