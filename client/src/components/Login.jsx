import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { gql, useQuery } from '@apollo/client';
import Loader from "react-loader-spinner"
import "../styles/login.css"

const LOGIN_INFO = gql`
    query login {
        login {
            username
            password
        }
    }
`;

function Login() {

    const[user, Setuser] = useState('');
    const[password, Setpass] = useState('');
    const history = useHistory();

    const {loading, error, data} = useQuery(LOGIN_INFO);
    if(loading) return <div className="spinner"><Loader type="Grid" color="#9c9c9c" height={80} width={80}/></div>
    if(error) return `Error! ${error.message}`;

    console.log(data.login[0].username);

    function handleSubmit() {

        if(user === data.login[0].username && password === data.login[0].password) {
            history.push({
                pathname: '/admin',
                state: {authenticated: true}
            });
        } else {
            history.push({
                pathname: "/",
                state: {login: false}
            })
        }
        Setuser('');
        Setpass('');
    }

    function handlePass(evt) {
        Setpass(evt.target.value)
    }

    function handleUser(evt) {
        Setuser(evt.target.value)
    }

    return(
        // <div className="">
        //     <label>Enter username:</label>
        //     <input type="text" value={user} onChange={handleUser}></input>
        //     <label>Enter password:</label>
        //     <input type="password" value={password} onChange={handlePass}></input>
        //     <button type="button" onClick={handleSubmit}>Submit</button>
        // </div>

<div class="container">
<div class="top"></div>
<div class="bottom"></div>
<div class="center">
  <h2>Login</h2>
  <input type="text" value={user} onChange={handleUser} placeholder="Username"></input>
  <input type="password" value={password} onChange={handlePass} placeholder="Password"></input>
  <button className="submit" type="button" onClick={handleSubmit}>Submit</button>
  <h2>&nbsp;</h2>
</div>
</div>
    );
}

export default Login;
