import React from "react";
import './Register.css';
import { Link } from 'react-router-dom';
import RegisterForm from "./RegisterForm";

export default function Register(props) {
  return (
    <div className = 'RegisterForm'>
      <h1>Register</h1>
      <RegisterForm onChange={props.onChange} onSubmit={props.onSubmit} {...props}/>
      <Link to={'login'}>Go Login!</Link>
    </div>
  )
}
