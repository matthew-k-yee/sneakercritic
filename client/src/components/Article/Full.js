// Importing Packages
import React, { Component } from 'react';
import axios from 'axios';

export default class Full extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      data: {},
      id: Number(this.props.match.params.id)
    }
    console.log(props);
  }

  async componentDidMount() {
    const data = await this.getArticle();
    await this.setState({data});
  }

  async getArticle() {
    this.setState({loading: true});
    return await axios.get(
      `${this.props.server_url}/articles/${this.state.id}`
    ).then(data => {
      this.setState({loading: false});
      console.log(data.data.articles);
      return data.data.articles;
    }).catch(
      () => {
        this.setState({loading: 'error'});
      }
    );
  }

  render() {
    return (
      <div>
        <h1>{(this.state.data) ? this.state.data.title : ''}</h1>
        <p>{(this.state.data) ? this.state.data.text : ''}</p>
      </div>
    )
  }
}
