import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/';
import BrandsList from './components/Brands/List';
import Article from './components/Article/Item';
import Register from './components/Register/Index';
import Profile from './components/Profile/Index';
import Login from './components/Login/Index';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      brands: [],
      loginRegCrit: {
        user_name: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
        token: '',
      },
    }
  }

  async componentDidMount() {
    const brands = await this.getBrands();
    this.setState({
      brands: brands,
    })
  }

  getBrands = async () => {
    return await axios.get(`${BASE_URL}/brands`).then(data => data.data.brands);
  }


  onChange = (evt) => {
    const {name, value} = evt.target;
    this.setState(prevState => {
      return {
        loginRegCrit: {
          ...prevState.loginRegCrit,
          [name]: value,
        }
      }
    })
  }

  // GET http://localhost:3001/users/login
  onLogin = async (userData) => {
    console.log('this is the userData for login', userData);
    const currentUsers =  await axios.post(`${BASE_URL}/users/login`, userData);
    this.setState(prevState => {
      return {
        loginRegCrit: {
          ...prevState.loginRegCrit,
          password: '',
          token: currentUsers.data.token,
        }
      } });
    console.log(currentUsers.data);
  }

  //POST http://localhost:3001/users
  onRegister = async (userData) => {
    console.log(userData);
    const newUsers =  await axios.post(`${BASE_URL}/users`, userData);
    this.setState(prevState => {
      return {
        loginRegCrit: {
          ...prevState.loginRegCrit,
          password: '',
          token: newUsers.data.token,
        }
      }
    })
    console.log('You are register ',newUsers.data);
  }

  //GET http://localhost:3001/users/profile
  getProfile = async () => {
    const URL = `${BASE_URL}/profile`
    const resp = await axios({
      method: 'get',
      url: URL,
      headers: {
        Authorization: this.state.loginRegCrit.token,
      }
    });
    console.log(resp.data);
  }

  onSubmitReg = async (evt) => {
    evt.preventDefault();
    await this.onRegister(this.state.loginRegCrit)
  }

  onSubmitLog = async (evt) => {
    evt.preventDefault();
    await this.onLogin(this.state.loginRegCrit)
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="view">
          <Switch>
            <Route exact path='/' render={ (props) => <BrandsList {...props} brands={this.state.brands} /> } />
            <Route exact path='/articles/:id' render={(props) => <Article {...props} />} />
            <Route exact path='/articles' render={(props) => <Article {...props}/>} />
            <Route exact path='/login' render={(props) => <Login {...props} onChange={this.onChange} onSubmit={this.onSubmitLog} loginRegCrit={this.state.loginRegCrit}/>} />
            <Route exact path='/profile' render={(props) => <Profile {...props} />} />
            <Route
              exact path={'/register'}
              render={
                (props) => {
                  return (
                    <Register
                      {...props}
                      onChange={this.onChange}
                      onSubmit={this.onSubmitReg}
                      loginRegCrit={this.state.loginRegCrit}
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
