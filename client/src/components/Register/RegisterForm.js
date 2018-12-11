import React from "react";
// user_name: Sequelize.STRING,
// password: Sequelize.STRING,
// email: Sequelize.STRING,
// first_name: Sequelize.STRING,
// last_name: Sequelize.STRING
export default function RegisterForm(props) {
  return (
    <form onSubmit={props.onSubmit} className="RegisterForm">
      <label>
        firstName:
        <input
          type='text'
          name='first_name'
          value={props.loginRegCrit.first_name}
          onChange={props.onChange}
        />
      </label>
      <label>
        lastName:
        <input
          type='text'
          name='last_name'
          value ={props.loginRegCrit.last_name}
          onChange={props.onChange}
        />
      </label>
      <label>
        Name:
        <input type='text'
          name='user_name'
          value={props.loginRegCrit.user_name}
          onChange={props.onChange}
        />
      </label>
      <label>
        password:
        <input
          type='password'
          name='password'
          value={props.loginRegCrit.password}
          onChange={props.onChange}
        />
      </label>
      <label>
        email:
        <input
          name='email'
          type='email'
          value={props.loginRegCrit.email}
          onChange={props.onChange}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  )
}
