import React, {useState} from 'react';
import styled from '@emotion/styled';
import { gql, useMutation, useQuery} from "@apollo/client";
import { useAlert } from 'react-alert';
import FadeIn from 'react-fade-in';
import { UPDATE_PROJECT } from '../apollo/mutations'

const Container = styled.div`
margin: 2rem auto 0px;
width: 90%;
`;

const Icon = styled.span`
margin-left: auto;
font-size: 20px;
float:right;
opacity: 0.65;
&:hover {
    opacity: 1;
}
`;

function ProjectUpdateEditor(props) {

    const alert = useAlert();
    const[id] = useState(props.id)
    const[title, setTitle] = useState(props.title);
    const[desc, setDesc]= useState(props.desc);
    const[link, setLink]= useState(props.link);
    const[demolink, setDemo] = useState(props.demolink);
    const [updateProject] = useMutation
    (
        UPDATE_PROJECT,
        {
            onCompleted(data) {
                if(data) {
                    alert.show("Project updated");
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
        updateProject({variables: {id: id, title: title, desc: desc, link: link, demolink: demolink}})
    }

    return(
        <div>
            <FadeIn>
            <Container>
            <h4 class="alert alert-info">Edit {props.title} 
                <Icon>
                    <i class="fas fa-window-close" onClick={props.handler}></i>
                </Icon>
            </h4>
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
            </FadeIn>
        </div>
    );
}

export default ProjectUpdateEditor;