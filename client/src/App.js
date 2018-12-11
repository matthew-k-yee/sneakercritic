import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
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

  }

  render() {
    return (
      <div className="App">
        <button onClick={() => {this.setState({view: 'index'})}}>Click me!</button>
        <div className="view">
          <Switch>
            <Route exact path='/'       render={(props) => <BrandsList {...props} brands={this.state.brands} />} />
            <Route exact path='/article/:id'  render={(props) => <Article {...props} />} />
            <Route exact path='/article'      render={(props) => <Article {...props} />} />
            <Route exact path='/login'      render={(props) => <Login {...props} onChange={this.onChange} />} />
            <Route exact path='/profile'      render={(props) => <Profile {...props} />} />
            <Route exact path='/register'      render={(props) => <Register {...props} onChange={this.onChange} />} />

          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
