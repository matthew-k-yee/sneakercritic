import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import BrandsList from './components/Brands/List';
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

  async getBrands() {
    return await axios.get(`${BASE_URL}/brands`).then(data => data.data.brands);
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => {this.setState({view: 'index'})}}>Click me!</button>
        <div className="view">
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
        </div>
        <BrandsList brands={this.state.brands} />
      </div>
    );
  }
}

export default App;
