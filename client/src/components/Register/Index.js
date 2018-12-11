import React from "react";
import RegisterForm from "./RegisterForm";

export default function Register(props) {
  return (
    <div>
      <h1>Register</h1>
      <RegisterForm onChange={props.onChange}/>
    </div>
  )
}
