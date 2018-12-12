import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header>
        <Link to={'/'}>Home</Link>
        <Link to={'/articles'}>Articles</Link>
        <Link to={'/brands'}>Brands</Link>
        <Link to={'/profile'}>Profile</Link>
        <Link to={'/register'}>Register</Link>
        <Link to={'/login'}>Login</Link>
      </header>
    )
  }
}
