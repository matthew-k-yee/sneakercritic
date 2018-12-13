import React from "react";
import './Login.css'

export default function LoginForm(props) {
  return (
    <form onSubmit={props.onSubmit} className="LoginForm">
      <label>
        Name:
        <input type='text'
          name='user_name'
          value={props.credentials.user_name}
          onChange={props.onChange}
        />
      </label>
      <label>
        password:
        <input
          type='password'
          name='password'
          value={props.credentials.password}
          onChange={props.onChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  )
}
