import React, { useState } from "react";
import { postUser } from "../services/authentication";

import Logo from "../components/logo/logo"
import "./Login.scss"
function Login() {
  const [userName, setUserName] = useState('');

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(userName)
      postUser(userName)
        .then((response
          ) => {
          console.log(response.data)
        })
        .catch((error) => {
          console.error(error);
        });
    
  };

  return (
    <div className='login'>
      <Logo />
      <div className='login-form'>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit} className='login-form-zone'>
          <label >User name</label>
          <input
          type="text"
          value={userName}
          onChange={handleUserNameChange}
        />
        <button type="submit">Sign in</button>
      </form>

      </div>
    </div>
  );
}

export default Login;
