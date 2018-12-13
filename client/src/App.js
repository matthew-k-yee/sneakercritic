// Importing Packages
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';

// Importing Components
import Header from './components/Header/';
import Brands from './components/Brands/Item';
import Articles from './components/Article/';
import Register from './components/Register/Index';
import Profile from './components/Profile/Index';
import Login from './components/Login/Index';

// Setting variables
const SERVER_URL = 'http://localhost:3001';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: [],
      credentials: {
        user_name: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
        token: '',
        comments: [],
      },
      articleData: {
        isReady: false,
        article: null,
        sneaker: null,
        brand: null,
        comments: [],
      },
      loggedIn: false,
    }
  }

  onChange = (evt) => {
    const {name, value} = evt.target;
    this.setState(prevState => {
      return {
        credentials: {
          ...prevState.credentials,
          [name]: value,
        }
      }
    })
  }

  // GET http://localhost:3001/users/login
  onLogin = async (userData) => {
    const currentUsers =  await axios.post(`${SERVER_URL}/users/login`, userData);
    this.setState(prevState => {
      return {
        credentials: {
          ...prevState.credentials,
          password: '',
          token: `Bearer ${currentUsers.data.token}`,
        }
      } });
  }

  // POST http://localhost:3001/users
  onRegister = async (userData) => {
    const newUsers =  await axios.post(`${SERVER_URL}/users`, userData);
    this.setState(prevState => {
      return {
        credentials: {
          ...prevState.credentials,
          password: '',
          token: `Bearer ${newUsers.data.token}`,
        }
      }
    })
  }

  // GET http://localhost:3001/users/profile
  getProfile = async () => {
    const URL = `${SERVER_URL}/users/profile`;
    const resp = await axios({
      method: 'get',
      url: URL,
      headers: {
        Authorization: this.state.credentials.token,
      }
    });
    const userComments = resp.data.comments;
    this.setState(prevState => {
      return {
      credentials: {
        ...prevState.credentials,
        ...resp.data.user,
        comments: userComments,
      }}
    })
  }

  onSubmitReg = async (evt) => {
    evt.preventDefault();
    await this.onRegister(this.state.credentials)
  }

  onSubmitLog = async (evt) => {
    evt.preventDefault();
    await this.onLogin(this.state.credentials)
    await this.getProfile();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="view">
          <Switch>
            <Route exact path='/' />
            <Route
              path='/articles'
              render={
                (props) => <Articles {...props} server_url={SERVER_URL} />
              }
            />
            <Route exact path='/login' render={(props) => <Login {...props} onChange={this.onChange} onSubmit={this.onSubmitLog} credentials={this.state.credentials} />} />
            <Route exact path='/profile' render={(props) => <Profile {...props} credentials={this.state.credentials} />}/>
            <Route exact path={'/register'}
              render={
                (props) => {
                  return (
                    <Register
                      {...props}
                      onChange={this.onChange}
                      onSubmit={this.onSubmitReg}
                      credentials={this.state.credentials}
                    />
                  )
                }
              }
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
