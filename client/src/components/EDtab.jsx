import React, { useState } from 'react'
import styled from '@emotion/styled'
import DeleteAlert from './DeleteAlert'
import EditAlert from './EditAlert'

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
`;

const EditButton = styled.button`
float: right;
color: white;
background-color: #1f73b3;
border: 0;
margin-left: 10px;
border-radius: 5px;
padding: 2px;
font-size: 15px;
`;

function EDtab(props) {

    const [del, setDelete] = useState(false);
    const [edit, setEdit] = useState(false);

    function handleClick() {
        setDelete(true);
    }

    function handleIconClickDelete() {
        setDelete(!del);
    }

    function handleIconClickEdit() {
        setEdit(!edit);
    }

    function handleEdit() {
        setEdit(true);
    }

    return(
    <div>
        <Tab>{props.title}<EditButton onClick={handleEdit}>Edit</EditButton><DeleteButton onClick={handleClick}>Delete</DeleteButton></Tab>
        { del ? <DeleteAlert title={props.title} id={props.id} handler={handleIconClickDelete} ></DeleteAlert> : ""}
        { edit ? <EditAlert id={props.id} title={props.title} desc={props.desc} text={props.text} handler={handleIconClickEdit}></EditAlert>: ""}
    </div>
    );
}

export default EDtab;