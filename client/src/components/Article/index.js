import React, { Component } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';
const BASE_URL = 'http://localhost:3001';
let MATCH_PATH = '';

export default class Articles extends Component {
  constructor(props) {
    super(props);
    MATCH_PATH = props.match.path;
  }

  componentDidMount = async () => {
    const articles = await this.getArticles();
    await this.setState({
      data: articles
    });
    console.log(this.state.data);
  }

  getArticles = async () => {
    const id = null || this.props.match.params.id;
    return await axios.get(
      `${BASE_URL}/articles${(id) ? `/${id}` : `` }`
    ).then(data => data.data.articles);
  }

  render() {
    return (
      <Switch>
        // Render a list of articles
        <Route exact path={`${MATCH_PATH}`} />
        // Render the article page
        <Route exact path={`${MATCH_PATH}/:id`} render={(props) => {
          return (
            <div>
              Hi
              {console.log(props)}
            </div>
          )
        }} />
      </Switch>
    )
  }
}
