import React, { useState } from 'react'
import styled from '@emotion/styled'
import Alert from './Alert'

const Tab = styled.div`
border: 2px solid grey;
border-radius: 5px;
margin-top: 0.5rem;
padding: 0.6em;
width: 60%;
margin-left:20%;
margin-right:20%;
box-shadow: 0 6px 6px -6px #777;
}
`
const Button = styled.button`
float: right;
color: white;
background-color: #dc3545;
border: 0;
border-radius: 5px;
padding: 2px;
font-size: 15px;
`;

function Deletetab(props) {

    const [authenticated, setAuth] = useState(false);

    function handleClick() {
        setAuth(true);
    }

    function handleIconClick() {
        setAuth(!authenticated);
    }

    return(
    <div>
        {authenticated ? <Alert title={props.title} id={props.id} handler={handleIconClick} ></Alert> : <Tab>{props.title}
    <Button onClick={handleClick}>Delete</Button></Tab>}
    </div>
    );
}

export default Deletetab;