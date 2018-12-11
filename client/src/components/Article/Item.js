import React, { Component } from 'react';
import axios from 'axios';
const BASE_URL = 'http://localhost:3001';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  async componentDidMount() {
    const articles = await this.getArticles();
    await this.setState({
      data: articles
    });
    console.log(this.state.data);
  }

  async getArticles() {
    const id = null || this.props.match.params.id;
    return await axios.get(
      `${BASE_URL}/articles${(id) ? `/${id}` : `` }`
    ).then(data => data.data.articles);
  }

  renderArticles() {
    if (Array.isArray(this.state.data)) {
      return this.state.data.map(item => <h1>{item.title}</h1>);
    }
    else {
      return <h1>{this.state.data.title}</h1>
    }
  }

  render() {
    return (
      <div>
        Article
        {this.renderArticles()}
      </div>
    )
  }
}
