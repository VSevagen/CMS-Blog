import React, { useState } from 'react';
import { gql, useMutation} from "@apollo/client";
import { useLocation } from "react-router-dom";
import "../styles/admin.css"

const CREATE_NEW_BLOG = gql`
mutation createBlog($title: String!, $description: String!, $text: String!, $component: String!, $date: String!) {
    createBlog(blogInput : {title: $title, description: $description, text: $text, component: $component, date: $date}) {
        title
        description
        text
        component
        date
    }
  }
`;

function Admin() {

    const location = useLocation();
    let authenticated = null;
    if(location.state === undefined) {
        authenticated = false;
    } else {
        authenticated = true;
    }

    const [addBlog] = useMutation(CREATE_NEW_BLOG)
    const[title, setTitle] = useState('')
    const[description, setDesc] = useState('')
    const[text, setText] = useState('')
    const[component, setComp] = useState('')
    const[date, setDate] = useState('')

    function handleSubmit() {
        addBlog({variables: {title: title, description: description, text: text, component: component , date: date }});
        setText('')
        setTitle('')
        setDate('')
        setDesc('')
        setComp('')
    }

    function handleChange(evt) {
        setTitle(evt.target.value)
    }

    function handleChange2(evt) {
        setDesc(evt.target.value)
    }

    function handleChange3(evt) {
        setText(evt.target.value)
    }

    function handleChange4(evt) {
        setComp(evt.target.value)
    }

    function handleChange5(evt) {
        setDate(evt.target.value)
    }

    return(

    <div>
    {authenticated ? <div>
        <h2>Create a new blog</h2>

    <div id="container">

    <span className="input">
        <input type="text" className="input__field" id="input-1" value={title} onChange={handleChange} />
        <label for="input-1" className="input__label">
        <span className="input__label-content">Blog Title</span>
    </label>
    </span>

    <span className="input">
        <input type="text" className="input__field" id="input-2" value={component} onChange={handleChange4} />
        <label for="input-2" className="input__label">
        <span className="input__label-content">Component Name</span>
        </label>
    </span>

    <span className="input">
        <input type="text" className="input__field" id="input-3" value={date} onChange={handleChange5}/>
        <label for="input-3" className="input__label">
        <span className="input__label-content">Date</span>
        </label>
    </span>

    <span className="input">
        <input type="text" className="input__field" id="input-4" value={description} onChange={handleChange2}/>
        <label for="input-4" className="input__label">
        <span className="input__label-content">Description</span>
        </label>
    </span>

    <span className="input message">
        <input component="textarea" className="input__field" id="input-5" value={text} onChange={handleChange3}></input>
        <label for="input-5" className="input__label">
        <span className="input__label-content">Text</span>
        </label>
    </span>

    <button id="send-button" type="button" onClick={handleSubmit}>Submit</button>
    </div>   
    </div> : <div>Not authenticated, You have to login :)</div> }
    </div>
    );
}

export default Admin;