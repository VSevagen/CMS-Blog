import React, { useState, useEffect } from "react"
import styled from '@emotion/styled'
import { gql, useMutation, useQuery} from "@apollo/client";
import { UPDATE_BLOG } from '../apollo/mutations'
import FadeIn from 'react-fade-in';
import { useAlert } from 'react-alert'
import "../styles/admin.css"

const Icon = styled.span`
margin-left: auto;
font-size: 20px;
float:right;
opacity: 0.65;
&:hover {
    opacity: 1;
}
`;

function EditAlert(props) {

    var center = {
        margin: "0 auto",
        width: "90%",
        marginTop: "2rem"
    }
    let marked = require("marked");
    const alert = useAlert();
    const[id, setID] = useState(props.id);
    const[title, setTitle] = useState(props.title);
    const[description, setDesc] = useState(props.desc);
    const[text, setText] = useState(props.text)
    const [updateBlog] = useMutation
    (
        UPDATE_BLOG,
        {
            onCompleted(data) {
                if(data) {
                    alert.show("Edit successfull !");
                    window.location.reload();
                }
            }
        }
    )

    function handleChange(evt) {
        setTitle(evt.target.value)
    }

    function handleChange2(evt) {
        setDesc(evt.target.value)
    }

    function handleChange3(evt) {
        setText(evt.target.value)
    }

    function handleSubmit() {
        updateBlog({variables: {id: id, title: title, description: description, text: text, }});
    }

    return(
        <div>
            <FadeIn>
            <div style={center}>
                <h4 class="alert alert-info">Edit {props.title} <Icon>
                <i class="fas fa-window-close" onClick={props.handler}></i>
                </Icon></h4>
                <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1">Blog Title</span>
                    <input type="text" class="form-control" placeholder="Ex: An Overview of India's education system" value={title} onChange={handleChange}></input>
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">Description</span>
                    <input type="text" class="form-control" placeholder="Ex: Let me start by saying that the current statistics are showing that the education system is outdated, inefficient and a danger to human health" value={description} onChange={handleChange2}></input>
                </div>
                <div class="row">

                    <div class="input-group col-lg-6">
                        <span class="input-group-text">Blog Text</span>
                        <textarea rows="20" placeholder="IMPORTANT......use the following class for you text. blog_img for images and blog-content"  class="form-control" aria-label="With textarea" value={text} onChange={handleChange3}></textarea>
                    </div>

                    <div class="col-lg-6 preview" dangerouslySetInnerHTML={{__html: marked(text)}}></div>

                </div>
                <button type="button" id="center" class="btn btn-outline-secondary" onClick={handleSubmit}>Submit</button>
            </div>
            </FadeIn>
        </div>
    )
};

export default EditAlert;