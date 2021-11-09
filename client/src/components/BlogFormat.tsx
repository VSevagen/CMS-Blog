import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/blog.css';

type BlogFormatPropsType = {
  aboutProps: any;
}

const BlogFormat = ({aboutProps}: BlogFormatPropsType) => {
  if (aboutProps != undefined) {
    const title = aboutProps.title
    const date = aboutProps.date
    const text = aboutProps.text
    localStorage.setItem('title', title)
    localStorage.setItem('date', date)
    localStorage.setItem('text', text)
  }

  function createMarkup () {
    let text = localStorage.getItem('text')
    if (text === null) {
      text = "";
    } 

    return { __html: text }
    
  }

  return (
    <div>
      <Header />
      <div className="post-list">
        <ul>
          <li>
            <div className="blog-title">{localStorage.getItem('title')}</div>
            <div className="blog-date">{localStorage.getItem('date')}</div>

            <div>
              <div dangerouslySetInnerHTML={createMarkup()}></div>
            </div>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}

export default BlogFormat
