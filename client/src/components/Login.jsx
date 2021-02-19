import React, { useState } from "react";
import { useHistory } from "react-router-dom";



function Login() {

    const[user, Setuser] = useState('');
    const[password, Setpass] = useState('');
    const history = useHistory();
    function handleSubmit() {

        if(user === "sevagen" && password === "sevagen") {
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
        <div>
            <label>Enter username:</label>
            <input type="text" value={user} onChange={handleUser}></input>
            <label>Enter password:</label>
            <input type="password" value={password} onChange={handlePass}></input>
            <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;
