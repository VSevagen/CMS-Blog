

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { gql, useMutation} from "@apollo/client";

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

    const [addBlog] = useMutation(CREATE_NEW_BLOG)
    const[title, setTitle] = useState('')
    const[description, setDesc] = useState('')
    const[text, setText] = useState('')
    const[component, setComp] = useState('')
    const[date, setDate] = useState('')

    function handleSubmit(evt) {
        addBlog({variables: {title: title, description: description, text: text, component: component , date: date }});
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
        <form onSubmit={ e => {
            e.preventDefault();
            handleSubmit(e)
        }}>
            <label>Enter the blog title: </label>
//           <input type="text" value={title} placeholder="eg. Why are girls so bitchy !" onChange={handleChange}/><br></br>
{/* //           <ErrorMessage name="title" component="div" /> */}
//           <label>Enter the blog component name: </label>
//           <input type="text" value={component} onChange={handleChange4}/><br></br>
{/* //           <ErrorMessage name="component" component="div" /> */}
//           <label>Enter the blog desc: </label>
//           <input type="text" value={description} placeholder="Enter the text to be displayed on the hompage" onChange={handleChange2}/><br></br>
{/* //           <ErrorMessage name="description" component="div"/> */}
//           <label>Enter the blog creation date: </label>
//           <input value={date} type="text" placeholder="eg. 22 Oct, 2019" onChange={handleChange5}/><br></br>
{/* //           <ErrorMessage name="date" component="div"/> */}
//           <label>Enter blog text: </label>
//           <input component="textarea" value={text} onChange={handleChange3}/><br></br>
{/* //           <ErrorMessage name="text" component="div"/> */}
        <input type="submit" value="Submit" />
      </form>
    );
}

export default Admin;

// function Admin() {

//     const [addBlog] = useMutation(CREATE_NEW_BLOG);
// return(
//   <div>
//     <h1>Admin Page</h1>
//     <Formik
//       initialValues={{ title: '', component: '', description: '', date: '', text: '' }}
//       validate={values => {
//         console.log(values);
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         setTimeout(() => {
//         //   alert(JSON.stringify(values, null, 2));
//         // alert(values.title)
//           setSubmitting(false);
//         }, 400);
//         addBlog({variables: {title: "test", description: "test", text: "test", component: "test", date: "test"}})
//       }}
//     >

//       {({ isSubmitting }) => (
//         <Form>
//             <label>Enter the blog title: </label>
//           <Field type="text" name="title" placeholder="eg. Why are girls so bitchy !"/><br></br>
//           <ErrorMessage name="title" component="div" />
//           <label>Enter the blog component name: </label>
//           <Field type="text" name="component" /><br></br>
//           <ErrorMessage name="component" component="div" />
//           <label>Enter the blog desc: </label>
//           <Field type="text" name="description" placeholder="Enter the text to be displayed on the hompage"/><br></br>
//           <ErrorMessage name="description" component="div"/>
//           <label>Enter the blog creation date: </label>
//           <Field name="date" type="text" placeholder="eg. 22 Oct, 2019"/><br></br>
//           <ErrorMessage name="date" component="div"/>
//           <label>Enter blog text: </label>
//           <Field component="textarea" name="text"/><br></br>
//           <ErrorMessage name="text" component="div"/>
//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </Form>
//       )}
//     </Formik>
//   </div>
// );
//       }

// export default Admin;