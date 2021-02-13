import React from "react"
import "../styles/main.css"
import Footer from "./Footer"
import Header from "./Header"
import { gql, useQuery } from '@apollo/client';
import { Link } from "react-router-dom";
import Loader from "react-loader-spinner"

const GET_BLOG_DETAILS = gql`
    query blogs {
        blogs {
            title
            description
            date
            text
            component
        }
    }

`;

function Overview() {

    const {loading, error, data} = useQuery(GET_BLOG_DETAILS);
    if(loading) return <div className="spinner"><Loader type="Grid" color="#9c9c9c" height={80} width={80}/></div>
    if(error) return `Error! ${error.message}`;

    return(
        <div>
            <Header />
            <div className="post-list">
                <ul>
                    {data.blogs.map(blog => (
                        <li>
                            {/* <a id="blog-title" href={blog.title}>{blog.title}</a> blog.title.replace(/\s+/g, ''),*/}
                            <Link id="blog-title" to={{
                                pathname: blog.title.replace(/[\s()]+/g, ''),
                                aboutProps: {
                                    title: blog.title,
                                    date: blog.date,
                                    text: blog.text,
                                    component: blog.component
                                }
                            }}>{blog.title}</Link>
                            <h4>{blog.description}</h4>

                            <p>{blog.date}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </div>
    );
}

export default Overview;