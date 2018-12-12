import React, { Component } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import ArticleFullPage from './ArticleFullPage';
const BASE_URL = 'http://localhost:3001';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      fullPage: false,
    }
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

  renderArticles = () => {
   if (Array.isArray(this.state.data) && !this.state.fullPage) {
      return this.state.data.map(item => <Link to={`/articles/${item.id}`}>{item.title}</Link>);
    }
    else {
      return <ArticleFullPage fullArticle={this.state.data}/>
    }
  }

  render() {
    return (
      <div>
        Article
        <Switch>
          <Route exact path="/articles/" render={() => this.renderArticles()}/>
          <Route exact path="/articles/:id" render={() => this.setState({
            fullPage: true,
          }) }/>
        </Switch>
      </div>
    )
  }
}
