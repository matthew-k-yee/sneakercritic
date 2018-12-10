import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

const BASE_URL = 'http://localhost:3001/';
class App extends Component {

  async getBrands() {
    const resp = await axios(`${BASE_URL}/brands`);
    const brands = resp.data
    console.log(brands)
  }

  async componentDidMount() {
    await this.getBrands();
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
