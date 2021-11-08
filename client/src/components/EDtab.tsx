import React, { useState } from 'react';
import styled from '@emotion/styled';
import DeleteAlert from './DeleteAlert';
import EditAlert from './EditAlert';
import ProjectUpdateEditor from './ProjectUpdateEditor';

const Tab = styled.div`
border: 2px solid grey;
border-radius: 5px;
margin-top: 0.5rem;
padding: 0.6em;
width: 60%;
margin-left:20%;
margin-right:20%;
box-shadow: 0 6px 6px -6px #777;
}
`
const DeleteButton = styled.button`
  float: right;
  color: white;
  background-color: #dc3545;
  border: 0;
  margin-left: 10px;
  border-radius: 5px;
  padding: 2px;
  font-size: 15px;
  &:hover {
    border: 1px solid red;
  }
`

const EditButton = styled.button`
  float: right;
  color: black;
  // background-color: #65af32;
  border: 0;
  margin-left: 10px;
  border-radius: 5px;
  padding: 2px;
  font-size: 15px;
  &:hover {
    border: 1px solid black;
  }
`

type EDTabPropsType = {
  type: string;
  id: string;
  text: string;
  title: string;
  desc: string;
  demolink: string;
  link: string;
};

const EDtab = ({
  type,
  id,
  text,
  title,
  desc,
  demolink,
  link
}: EDTabPropsType) => {
  const [del, setDelete] = useState(false)
  const [edit, setEdit] = useState(false)

  function handleClick () {
    setDelete(true)
  }

  function handleIconClickDelete () {
    setDelete(!del)
  }

  function handleIconClickEdit () {
    setEdit(!edit)
  }

  function handleEdit () {
    setEdit(true)
  }

  return (
    <div>
      <Tab>
        {title}
        <EditButton onClick={handleEdit}>Edit</EditButton>
        <DeleteButton onClick={handleClick}>Delete</DeleteButton>
      </Tab>
      {del
? (
        <DeleteAlert
          type={type}
          title={title}
          id={id}
          handler={handleIconClickDelete}
        ></DeleteAlert>
      )
: (
        ''
      )}
      {edit && type == 'blog' ? (
        <EditAlert
          id={id}
          title={title}
          desc={desc}
          text={text}
          handler={handleIconClickEdit}
        ></EditAlert>
      )
: (
        ''
      )}
      {edit && type == 'project' ? (
        <ProjectUpdateEditor
          id={id}
          title={title}
          desc={desc}
          demolink={demolink}
          link={link}
          handler={handleIconClickEdit}
        ></ProjectUpdateEditor>
      )
: (
        ''
      )}
    </div>
  )
}

export default EDtab
