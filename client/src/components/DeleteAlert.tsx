import React, { useState } from 'react';
import styled from '@emotion/styled';
import { gql, useMutation } from '@apollo/client';
import FadeIn from 'react-fade-in';
import { useAlert } from 'react-alert';
import { DELETE_BLOG, DELETE_PROJECT } from '../apollo/mutations';

const Container = styled.div`
  position: relative;
  padding: 0.75rem 1.25rem;
  margin-bottom: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  color: white;
  background-color: #dc3545;
  border-color: #f5c6cb;
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 1rem;
`

const Input = styled.input`
  border-radius: 7px;
  border: none;
  margin-left: 2%;
  width: 41%;
  outline: none;
`

const Button = styled.button`
  margin-left: 2%;
  border-radius: 7px;
  color: red;
  background-color: white;
  border: none;
  padding: 0.25rem 0.5rem;
  &:disabled {
    background-color: white;
    color: red;
    opacity: 0.5;
    cursor: not-allowed;
  }
`

const Heading = styled.div`
  display: flex;
`

const Icon = styled.span`
  margin-left: auto;
  font-size: 20px;
  opacity: 0.65;
  &:hover {
    opacity: 1;
  }
`

type DeleteAlertPropsType = {
  id: any;
  title: any;
  type: any;
  handler: any;
};

const DeleteAlert = ({ id, title, type, handler }: DeleteAlertPropsType) => {
  const alert = useAlert()
  const [Title, setTitle] = useState('');
  const [value, setValue] = useState(type)
  const [deleteBlog] = useMutation(DELETE_BLOG, {
    onCompleted (data) {
      if (data) {
        alert.show('Blog deleted');
        window.location.reload()
      }
    }
  })

  const [deleteProject] = useMutation(DELETE_PROJECT, {
    onCompleted (data) {
      if (data) {
        alert.show('Project deleted');
        window.location.reload()
      }
    }
  })

  function handleSubmit () {
    if (value == 'project') {
      deleteProject({ variables: { id: id } })
    }
    if (value == 'blog') {
      deleteBlog({ variables: { id: id } })
    }
  }

  function handleChange (evt: any) {
    setTitle(evt.target.value)
  }

  return (
    <FadeIn>
      <div>
        <Container>
          <Heading>
            <h4 className="alert-heading">Are you absolutely sure ?</h4>
            <Icon>
              <i className="fas fa-window-close" onClick={handler}></i>
            </Icon>
          </Heading>
          <div>
            <p>
              This action <strong>cannot</strong> be undone. This will
              permanently delete the blog <strong>{title}</strong>
            </p>
          </div>
          <hr></hr>
          <p className="mb-0">
            Please type <strong>{title}</strong> to confirm
          </p>
          <Input
            type="text"
            value={Title}
            placeholder=""
            onChange={handleChange}
          ></Input>
          <Button onClick={handleSubmit} disabled={Title != title}>
            I understand the consequences, delete this blog
          </Button>
        </Container>
      </div>
    </FadeIn>
  )
}

export default DeleteAlert
