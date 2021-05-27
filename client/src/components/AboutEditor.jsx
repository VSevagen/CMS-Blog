import React, { useState } from 'react'
import { gql, useMutation } from "@apollo/client";
import FadeIn from 'react-fade-in';
import styled from '@emotion/styled';
import { useAlert } from 'react-alert';

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

const  UPDATE_ABOUT = gql`
mutation updateAbout($id: ID!, $desc: String!, $email: String!, $skills: [String!]) {
    updateAbout(id: $id, desc: $desc, email: $email, skills: $skills) {
        _id
        skills
        desc
        email
    }
}
`;

function AboutEditor(props) {

    const alert = useAlert();
    const[id] = useState(props.id);
    const[desc, setDesc] = useState(props.desc);
    const[email, setEmail] = useState(props.email);
    const[skills, setSkills] = useState(props.skills)
    const[updateAbout] = useMutation
    (
        UPDATE_ABOUT,
        {
            onCompleted(data) {
                if(data) {
                    alert.show("About has been edited");
                    window.location.reload();
                }
            }
        }
    )

    function handleDesc(evt) {
        setDesc(evt.target.value);
    }

    function handleEmail(evt) {
        setEmail(evt.target.value);
    }

    function handleSkills(evt) {
        setSkills(evt.target.value);
    }

    function handleSubmit() {
        const string= skills.toString()
        const Array = string.split(',')
        updateAbout({variables: {id: id, desc: desc, email: email, skills: Array}})
    }

    return(
        <div>
            <FadeIn>
            <Container>
            <h4 class="alert alert-info">Edit About page
                <Icon>
                    <i class="fas fa-window-close" onClick={props.handler}></i>
                </Icon>
            </h4>
            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">Description</span>
                <input type="text" class="form-control" value={desc} onChange={handleDesc}></input>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">Email</span>
                <input type="text" class="form-control" value={email} onChange={handleEmail}></input>
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon3">Skills</span>
                <input type="text" class="form-control" value={skills} onChange={handleSkills}></input>
            </div>

            <button type="button" id="center" class="btn btn-outline-secondary" onClick={handleSubmit}>Submit</button>
            </Container>
            </FadeIn>
        </div>
    );
}

export default AboutEditor;