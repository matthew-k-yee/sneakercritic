// Importing Packages
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Importing Components
import List from './List';
import Full from './Full';

// Setting variables
let MATCH_PATH = '';

// Main Articles component
export default class Articles extends Component {
  constructor(props) {
    super(props);
    MATCH_PATH = props.match.path;
  }

  render() {
    return (
      <Switch>
        // Render a list of articles
        <Route exact path={`${MATCH_PATH}`} render={(props) => {
          return (<List {...props} server_url={this.props.server_url} />)
        }}/>
        // Render the article page
        <Route exact path={`${MATCH_PATH}/:id`} render={(props) => {
          return (<Full {...props} server_url={this.props.server_url} />)
        }}/>
      </Switch>
    )
  }
}
