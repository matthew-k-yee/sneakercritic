// Importing Packages
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import './Article.css';
import queryString from 'query-string';


// Importing Components
import ListItem from './ListItem';

// Article List Component
export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false, // Loading: false (not loading), true (loading), 'error' (error)
      data: [],
      query: queryString.parse(props.location.search)
    }
  }

  async componentDidMount() {
    let data = await (
      this.getArticles().then(
        (resp) => {
          return this.filterArticles([...resp], this.state.query);
        }
      ).catch(() => this.setState({loading: 'error'}))
    );
    // data = await this.filterArticles([...data], this.state.query)
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

  // Filters a list of articles based on queries
  async filterArticles(data, query) {
    return data.filter(
      (item) => {
        for (let key in query) {
          switch (key) {
            case 'brand_id': // Filter by brand id
              return (item.sneaker.brand_id === Number(query.brand_id));
            default:
              return !(item[key] === undefined || item[key] != query[key])
          }
        }
        return true
      }
    )
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
      <div className="article-list">
        {this.renderArticles()}
        {
          // Redirects user to the error page should the articles fail to load.
          (this.state.loading === 'error') ? <Redirect to="/error?source=articlelist" /> : ''
        }
      </div>
    )
  }
}
