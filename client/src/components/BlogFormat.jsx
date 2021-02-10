import React, { useEffect } from 'react'
import Header from './Header';
import Footer from './Footer'
import "../styles/blog.css"
import GnomeAsia from './GnomeAsia'
import SchoolVisit from './SchoolVisit'
import Incubate from './Incubate'
import MySQLErr from './MySQLErr'
import MediaWiki from './MediaWiki'
import Python from './Python'
import FossTalk from './FossTalk'

function BlogFormat(props) {

    const components = {
        GnomeAsia: GnomeAsia,
        SchoolVisit: SchoolVisit,
        IncubateIND: Incubate,
        MySQL: MySQLErr,
        MediaWiki: MediaWiki,
        Python: Python,
        FossTalk: FossTalk
        }
    const Blog = React.createElement(components[props.location.aboutProps.component])
    
        return(
            <div>
                  <Header />
                    <div class="post-list">
                        <ul>
                            <li>
        <div class="blog-title">{props.location.aboutProps.title}</div>
                                <div class="blog-date">{props.location.aboutProps.date}</div>
    
                                <div>
                                    <p class="blog-content">
                                        {Blog}
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                  <Footer />  
            </div>
        );
    }

export default BlogFormat;