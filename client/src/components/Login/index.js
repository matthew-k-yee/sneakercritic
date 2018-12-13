import React from "react";
import './Login.css'
import LoginForm from "./LoginForm";
import { Link } from 'react-router-dom';

export default function Login(props) {
  return (
    <div className='LoginForm'>
      <h1>Login</h1>
      <LoginForm onChange={props.onChange} onSubmit={props.onSubmit} {...props} />
      <Link to={'register'}><h2>Go to Register</h2></Link>
    </div>
  )
}
