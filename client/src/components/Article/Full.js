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
      users: [],
      id: Number(this.props.match.params.id)
    }
    console.log(props);
  }

  async componentDidMount() {
    const users = await this.getUsers();
    console.log(users);
    const data = await this.getArticle();
    await this.setState({data, users});
  }

  async getUsers() {
    this.setState({loading: true});
    return await axios.get(
      `${this.props.server_url}/users/`
    ).then(data => {
      this.setState({loading: false});
      return data.data.user;
    }).catch(
      () => {
        this.setState({loading: 'error'});
      }
    );
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
        this.state.data.comments.map((item, index) => this.renderCommentItem(item, index))
      )
    }
    else {
      return ('')
    }
  }

  renderCommentItem(item, index) {
    const user = this.state.users.filter(useritem => useritem.id === item.user_id)[0];
    console.log(user);
    return (
      <div key={`comment-${index}`} id={`comment-${index}`}>
        <h1>{item.title}</h1>
        <h1>{user.user_name}</h1>
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
