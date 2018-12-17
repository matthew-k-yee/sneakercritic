import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import './Brands.css'
import ListItem from './ListItem';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: []
    }
  }

  async componentDidMount() {
    const data = await this.getBrands();
    await this.setState({data});
  }

  async getBrands() {
    this.setState({loading: true});
    return await axios.get(
      `${this.props.server_url}/brands`
    ).then(data => {
      this.setState({loading: false});
      return data.data.brands;
    }).catch(
      () => {
        this.setState({loading: 'error'});
      }
    );
  }

  renderBrands() {
    if (!this.state.loading) {
      return (
        this.state.data.map((item) => {
          return (
            <ListItem
              key={`brand-${item.id}`}
              item={item}
              match={this.props.match}
            />
          )
        })
      )
    }
    else {
      return (
        <div>Loading</div>
      )
    }
  }

  render() {
    return (
      <div className='brands'>
        {this.renderBrands()}
        {
          (this.state.loading === 'error') ? <Redirect to="/error?source=brandlist" /> : ''
        }
      </div>
    )
  }
}
