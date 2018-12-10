import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import BrandsList from './components/Brands/List';
const BASE_URL = 'http://localhost:3001';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'welcome',
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

  getView = () => {
    switch(this.state.view) {
      case 'welcome': return ("Welcome!");
      case 'index':   return ("Index!");
      case 'brands':  return ("Brands!");
      default:        return ("404");
    }
  }

  render() {
    return (
      <div className="App">
        {this.getView()}
        <button onClick={() => {this.setState({view: 'index'})}}>Click me!</button>
        <BrandsList brands={this.state.brands} />
      </div>
    );
  }
}

export default App;
