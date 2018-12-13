// Importing Packages
import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

// Importing Components
import ListItem from './ListItem';

// Article List Component
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // Loading: false (not loading), true (loading), 'error' (error)
      data: []
    }
  }

  async componentDidMount() {
    const data = await this.getArticles();
    await this.setState({data});
  }

  // Retrieves a list of articles from the database
  async getArticles() {
    this.setState({loading: true});
    return await axios.get(
      `${this.props.server_url}/articles`
    ).then(data => {
      this.setState({loading: false});
      return data.data.articles;
    }).catch(
      () => {
        this.setState({loading: 'error'});
      }
    );
  }

  renderArticles() {
    if (!this.state.loading) {
      return (
        this.state.data.map((item) => {
          return (
            <ListItem
              key={`article-${item.id}`}
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
      <div className='articles'>
        {this.renderArticles()}
        {
          // Redirects user to the error page should the articles fail to load.
          (this.state.loading === 'error') ? <Redirect to="/error?source=articlelist" /> : ''
        }
      </div>
    )
  }
}
