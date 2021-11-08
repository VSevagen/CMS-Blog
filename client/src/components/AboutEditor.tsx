import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import FadeIn from 'react-fade-in';
import styled from '@emotion/styled';
import { useAlert } from 'react-alert';
import { UPDATE_ABOUT } from '../apollo/mutations';

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

type AboutEditorPropsType = {
  id: string;
  desc: string;
  email: string;
  skills: any;
  handler: any;
}

const AboutEditor = ({id, desc, email, skills, handler}: AboutEditorPropsType) => {
  const alert = useAlert()
  const [Id] = useState(id)
  const [Desc, setDesc] = useState(desc)
  const [Email, setEmail] = useState(email)
  const [Skills, setSkills] = useState(skills)
  const [updateAbout] = useMutation(UPDATE_ABOUT, {
    onCompleted (data) {
      if (data) {
        alert.show('About has been edited');
        window.location.reload()
      }
    }
  })

  function handleDesc (evt: any) {
    setDesc(evt.target.value)
  }

  function handleEmail (evt: any) {
    setEmail(evt.target.value)
  }

  function handleSkills (evt: any) {
    setSkills(evt.target.value)
  }

  function handleSubmit () {
    const string = Skills.toString()
    const Array = string.split(',');
    updateAbout({
      variables: { id: Id, desc: Desc, email: Email, skills: Array }
    })
  }

  return (
    <div>
      <FadeIn>
        <Container>
          <h4 className="alert alert-info">
            Edit About page
            <Icon>
              <i className="fas fa-window-close" onClick={handler}></i>
            </Icon>
          </h4>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              Description
            </span>
            <input
              type="text"
              className="form-control"
              value={Desc}
              onChange={handleDesc}
            ></input>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              Email
            </span>
            <input
              type="text"
              className="form-control"
              value={Email}
              onChange={handleEmail}
            ></input>
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              Skills
            </span>
            <input
              type="text"
              className="form-control"
              value={Skills}
              onChange={handleSkills}
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

export default AboutEditor
