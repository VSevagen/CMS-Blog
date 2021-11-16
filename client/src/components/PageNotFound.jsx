import React from 'react';
import Error from '../public/404.svg';

function PageNotFound() {
  return (
    <div style={{textAlign: "center"}}>
      <img src={Error} alt="404 error" style={{display: "block", marginLeft: "auto", marginRight: "auto", width: "50%", paddingTop: "5%"}}/>
      <p style={{paddingTop: "10px", height: "10px"}}>Seems like this path doesn't exist</p>
      <a href="/" style={{display: "block", margin: "50px auto", width: "10%", color: "gray", paddingTop: "0px"}}>Go back</a>
    </div>
  );
}

export default PageNotFound;
