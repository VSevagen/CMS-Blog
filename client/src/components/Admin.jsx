import React, { useState } from 'react';
import { gql, useMutation, useQuery} from "@apollo/client";
import { useLocation } from "react-router-dom";
import "../styles/admin.css"
import Header from './Header'
import { useAlert } from 'react-alert'
import Loader from "react-loader-spinner"
import EDtab from './EDtab'

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

const FETCH_BLOG = gql`
query blogs {
    blogs {
        _id
        title
        description
        text
    }
}
`;

function Admin() {

    const alert = useAlert();
    let marked = require("marked");
    const location = useLocation();
    let authenticated = null;
    if(location.state === undefined) {
        authenticated = false;
    } else {
        authenticated = true;
    }

    var center = {
        margin: "0 auto",
        width: "70%"
    }
    const [addBlog] = useMutation
    (
        CREATE_NEW_BLOG,
        {
            onCompleted(data) {
                if(data) {
                    alert.show("Blog submitted");
                    window.location.reload();
                }
            }
        }
    )
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

    const {loading, error, data} = useQuery(FETCH_BLOG);
    if(loading) return <div className="spinner"><Loader type="Grid" color="#9c9c9c" height={80} width={80}/></div>
    if(error) return `Error! ${error.message}`;

    return(

    <div>
    {authenticated ?
    <div>
        <Header LoggedIn={authenticated}/>
        <div>
            <div><h2>Delete/Edit your blogs</h2></div>
            {data.blogs.map(blog => (
                <EDtab title={blog.title} id={blog._id} desc={blog.description} text={blog.text}></EDtab>
            ))}
        </div>
        <div><h2>Create a new blog</h2></div>

        <div style={center}>
        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon1">Blog Title</span>
            <input type="text" class="form-control" placeholder="Ex: An Overview of India's education system" value={title} onChange={handleChange}></input>
        </div>

        <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon2">Component Name</span>
            <input type="text" class="form-control" placeholder="Recipient's username" value={component} onChange={handleChange4}></input>
        </div>

        <div class="input-group mb-3">
            <span class="input-group-text" id="basic-addon3">Date</span>
            <input type="text" class="form-control" value={date} onChange={handleChange5} placeholder="Ex: 22 Jun, 2019"></input>
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
    </div>

    // <div>
    //     <h2>Create a new blog</h2>

    // <div id="container">

    // <span className="input">
    //     <input type="text" className="input__field" id="input-1" value={title} onChange={handleChange} />
    //     <label for="input-1" className="input__label">
    //     <span className="input__label-content">Blog Title</span>
    // </label>
    // </span>

    // <span className="input">
    //     <input type="text" className="input__field" id="input-2" value={component} onChange={handleChange4} />
    //     <label for="input-2" className="input__label">
    //     <span className="input__label-content">Component Name</span>
    //     </label>
    // </span>

    // <span className="input">
    //     <input type="text" className="input__field" id="input-3" value={date} onChange={handleChange5}/>
    //     <label for="input-3" className="input__label">
    //     <span className="input__label-content">Date</span>
    //     </label>
    // </span>

    // <span className="input">
    //     <input type="text" className="input__field" id="input-4" value={description} onChange={handleChange2}/>
    //     <label for="input-4" className="input__label">
    //     <span className="input__label-content">Description</span>
    //     </label>
    // </span>

    // <span className="input">
    //     <div>
    //         <textarea style={inputStyle} value={text} onChange={handleChange3}>
    //         </textarea>
    //     </div>
    //     <div style={outputStyle} dangerouslySetInnerHTML={{__html: marked(text)}}></div>
    // </span>

    // <button id="send-button" type="button" onClick={handleSubmit}>Submit</button>
    // </div>
    // </div>
    :
    <div class="bsod container">
    <h1 class="neg title"><span class="bg">Unauthorised</span></h1>
    <p className="entry">You tried to access /admin without login in.</p>
    <p className="entry"><a href="/login">Click here to login</a></p>
  </div> }
    </div>
    );
}

export default Admin;