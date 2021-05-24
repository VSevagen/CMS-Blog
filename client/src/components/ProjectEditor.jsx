import React, {useState} from 'react';
import styled from '@emotion/styled';
import { gql, useMutation, useQuery} from "@apollo/client";
import { useLocation } from "react-router-dom";
import { useAlert } from 'react-alert';

const Container = styled.div`
margin: 0 auto;
width: 70%;
`;

const CREATE_PROJECT = gql`
mutation createProject($title: String!, $desc: String!, $link: String!, $demolink: String!) {
    createProject(projectInput: {title: $title, desc: $desc, link: $link, demolink: $demolink}) {
        title
        desc
        demolink
        link
    }
}
`;

function ProjectEditor() {

    const alert = useAlert();
    const[title, setTitle] = useState('');
    const[desc, setDesc]= useState('');
    const[link, setLink]= useState('');
    const[demolink, setDemo] = useState('');
    const [createProject] = useMutation
    (
        CREATE_PROJECT,
        {
            onCompleted(data) {
                if(data) {
                    alert.show("Project created");
                    window.location.reload();
                }
            }
        }
    )

    function handleTitle(evt) {
        setTitle(evt.target.value)
    }

    function handleDesc(evt) {
        setDesc(evt.target.value)
    }

    function handlelink(evt) {
        setLink(evt.target.value)
    }

    function handledemolink(evt) {
        setDemo(evt.target.value)
    }

    function handleSubmit() {
        createProject({variables: {title: title, desc: desc, link: link, demolink: demolink}})
    }

    return(
        <div>
            <div><h2>Create a new Project</h2></div>

            <Container>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Project Title</span>
                <input type="text" class="form-control" value={title} onChange={handleTitle}></input>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">Project link</span>
                <input type="text" class="form-control" value={link} onChange={handlelink}></input>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">Project Demo link</span>
                <input type="text" class="form-control" value={demolink} onChange={handledemolink}></input>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">Description</span>
                <input type="text" class="form-control" value={desc} onChange={handleDesc}></input>
            </div>

            <button type="button" id="center" class="btn btn-outline-secondary" onClick={handleSubmit}>Submit</button>
            </Container>
        </div>
    );
}

export default ProjectEditor;