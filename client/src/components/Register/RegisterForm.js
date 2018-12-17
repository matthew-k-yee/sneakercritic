import React from "react";
import './Register.css';

export default function RegisterForm(props) {
  return (
    <form onSubmit={props.onSubmit} className="RegisterForm">
      <label>
        First Name:
        <input
          type='text'
          name='first_name'
          value={props.credentials.first_name}
          onChange={props.onChange}
        />
      </label>
      <label>
        Last Name:
        <input
          type='text'
          name='last_name'
          value ={props.credentials.last_name}
          onChange={props.onChange}
        />
      </label>
      <label>
        Username:
        <input type='text'
          name='user_name'
          value={props.credentials.user_name}
          onChange={props.onChange}
        />
      </label>
      <label>
        Password:
        <input
          type='password'
          name='password'
          value={props.credentials.password}
          onChange={props.onChange}
        />
      </label>
      <label>
        Email:
        <input
          name='email'
          type='email'
          value={props.credentials.email}
          onChange={props.onChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
