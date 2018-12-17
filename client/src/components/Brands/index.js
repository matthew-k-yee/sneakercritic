import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import List from './List';

let MATCH_PATH = '';

export default class Brands extends Component {
  constructor(props) {
    super(props);
    MATCH_PATH = props.match.path;
  }

  render() {
    return (
      <Switch>
        <Route exact path={`${MATCH_PATH}`} render={(props) => {
          return (<List {...props} server_url={this.props.server_url} />)
        }}/>
        {/* <Route exact path={`${MATCH_PATH}/:id`} render={(props) => {
          return (<Full {...props} server_url={this.props.server_url} />)
        }}/> */}
      </Switch>
    )
  }
}
