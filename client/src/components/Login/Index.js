import React from "react";
import LoginForm from "./LoginForm";

export default function Login(props) {
  return (
    <div>
      <h1>Login</h1>
      <LoginForm onChange={props.onChange}/>
    </div>
  )
}
