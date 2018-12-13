// Importing Packages
import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Full extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      data: {
        comments: [],
      },
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
      return data.data.articles;
    }).catch(
      () => {
        this.setState({loading: 'error'});
      }
    );
  }

  renderArticle() {
    if (!this.state.loading) {
      return (
        <div>
          <h1>{this.state.data.title}</h1>
          <p>{this.state.data.text}</p>
        </div>
      )
    }
    else {
      return (<div>Loading</div>);
    }
  }

  renderComments() {
    if (!this.state.loading) {
      return (
        this.state.data.comments.map(item => this.renderCommentItem(item))
      )
    }
    else {
      return ('')
    }
  }

  renderCommentItem(item) {
    return (
      <div>
        <h1>{item.title}</h1>
        <span>{new Date(item.created_at).toLocaleString('en-us')}</span>
        <p>{item.text}</p>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.renderArticle()}
        {this.renderComments()}
        {
          // Redirects user to the error page should the articles fail to load.
          (this.state.loading === 'error') ? <Redirect to="/error?source=articlepage" /> : ''
        }
      </div>
    )
  }
}
