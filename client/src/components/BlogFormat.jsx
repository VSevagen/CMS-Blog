import React from 'react'
import Header from './Header';
import Footer from './Footer'
import "../styles/blog.css"
import Incubate from './Incubate'
import MySQLErr from './MySQLErr'
import MediaWiki from './MediaWiki'
import Python from './Python'
import FossTalk from './FossTalk'

function BlogFormat(props) {

    const components = {
        IncubateIND: Incubate,
        MySQL: MySQLErr,
        MediaWiki: MediaWiki,
        Python: Python,
        FossTalk: FossTalk
        };

    if (props.location.aboutProps != undefined) {
        let blogName = props.location.aboutProps.component;
        let title = props.location.aboutProps.title;
        let date = props.location.aboutProps.date;
        let text = props.location.aboutProps.text;
        localStorage.setItem('blogName', blogName);
        localStorage.setItem('title', title);
        localStorage.setItem('date', date);
        localStorage.setItem('text', text);
    }

    function createMarkup () {
        return {__html: localStorage.getItem('text')}
    }

    const Blog = React.createElement(components[localStorage.getItem('blogName')]);
        return(
            <div>
                  <Header />
                    <div className="post-list">
                        <ul>
                            <li>
        <div className="blog-title">{localStorage.getItem('title')}</div>
                                <div className="blog-date">{localStorage.getItem('date')}</div>

                                <div>
                                    <div dangerouslySetInnerHTML={createMarkup()} >
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                  <Footer />  
            </div>
        );
    }

export default BlogFormat;