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
      newComment: {
        title: '',
        text: '',
        users_score: 0,
        user_id: (!!this.props.credentials.id) ? Number(this.props.credentials.id) : 1,
        article_id: Number(this.props.match.params.id),
      },
      users: [],
      id: Number(this.props.match.params.id)
    }
    console.log(props);
  }

   componentDidMount = async () => {
    const users = await this.getUsers();
    console.log(users);
    const data = await this.getArticle();

    if(data && data.comments && data.comments.length > 0) {
      data.comments.forEach(comment => {
      comment.inEditMode = false;
      comment.editable = true;})}
    await this.setState({data, users});
  }

   getUsers = async () => {
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

   getArticle = async () => {
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

  renderArticle = () => {
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

  renderComments = () => {
    if (!this.state.loading) {
      return (
        this.state.data.comments.map((item, index) => this.renderCommentItem(item, index))
      )
    }
    else {
      return ('')
    }
  }

  toggleCommentEditMode = (index) => {
    const comments = this.state.data.comments;
    comments[index].inEditMode = !comments[index].inEditMode;
    this.setState({
      data: {
        comments: comments,
      },
    });

  }

  toggleCommentinEditable = (index) => {
    const comments = this.state.data.comments;
    comments[index].editable = !comments[index].editable;
    this.setState({
      data: {
        comments: comments,
      },
    });

  }

  onChangeComment = (evt,index) => {
    const comments = this.state.data.comments;
    const {name, value} = evt.target
    comments[index][name] = value;

    this.setState({
      data: {
        comments: comments,
      },
    });

  }
  onChangeNewComment = (evt) => {
    const newComment = this.state.newComment;
    const {name, value} = evt.target
    newComment[name] = value;

    this.setState({
      newComment
    });

  }

  onSubmitComment =  async (evt,index) => {
    evt.preventDefault();
    const comments = this.state.data.comments;
    await axios.put(
      `${this.props.server_url}/comments/${comments[index].id}`,comments[index]
    )
    this.toggleCommentEditMode(index)
  }

  onSubmitNewComment =  async (evt) => {
    evt.preventDefault();
    const newComment = this.state.newComment;
    const resp = await axios.post(
      `${this.props.server_url}/comments`, newComment
    )
    const blankComment = {
      title: '',
      text: '',
      users_score: 0,
      user_id: 1,
      article_id: Number(this.state.id),
    }

    const comments = [resp.data.comment,...this.state.data.comments];
    //comments.push();
    this.setState({
      blankComment,
      data: {
        comments: comments,
      },
    });
  }


  renderCommentItem = (item, index) => {
    const user = this.state.users.filter(useritem => useritem.id === item.user_id)[0];
    console.log(user);
    ///// time created
    const updatedAt = item.updated_at === item.created_at
    ? <p><span>created at</span> {new Date(item.created_at).toLocaleString('en-us')} </p>
    : <p><span>updated at</span> {new Date(item.updated_at).toLocaleString('en-us')} </p>

    ///// Edit button
    const editSaveButton = item.inEditMode
    ? <div className="comment-edit-button-div">
      <button className="comment-edit-button"
        type='button'
        onClick={() => this.toggleCommentEditMode(index)}>
        save </button>
      </div>
    : <div className="comment-edit-button-div">
        <button className="comment-edit-button"
          type='button'
          onClick={() => this.toggleCommentEditMode(index)}>
          edit </button>
        </div>
      ////// render main content
      const renderForm =  <form onSubmit={(evt) => this.onSubmitComment(evt,index)} className="CommentsForm">
          <label>
            Name:
            <input type='text'
              name='title'
              value={item.title}
              onChange={(evt) => this.onChangeComment(evt,index)}
            />
          </label>
          <label>
            TextField:
            <textarea
              type='text'
              name='text'
              rows="6" cols="40"
              value={item.text}
              onChange={(evt) => this.onChangeComment(evt,index)}
            />
          </label>
          <label>
            Score:
            <input
              type='number'
              name='users_score'
              min='0'
              max='5'
              value={item.users_score}
              onChange={(evt) => this.onChangeComment(evt,index)}
            />
          </label>

          <button type="submit">Submit</button>
        </form>

      const renderPost = <div key={`comment-post-${index}`} id={`comment-post-${index}`}><h1>{item.title}</h1>
        <h1>{user.user_name}</h1>
        {updatedAt}
        <p>{item.text}</p>
        {editSaveButton}</div>




      const render = item.inEditMode  ? renderForm  : renderPost

    return (
      <div key={`comment-${index}`} id={`comment-${index}`}>
          {render}
      </div>
    )
  }

  renderFormContents = () => {
    const item = this.state.newComment;
    const newRenderForm =  <form onSubmit={this.onSubmitNewComment} className="NewCommentsForm">
        <label>
          Name:
          <input type='text'
            name='title'
            value={item.title}
            onChange={this.onChangeNewComment}
          />
        </label>
        <label>
          TextField:
          <textarea
            type='text'
            name='text'
            rows="6" cols="40"
            value={item.text}
            onChange={this.onChangeNewComment}
          />
        </label>
        <label>
          Score:
          <input
            type='number'
            name='users_score'
            min='0'
            max='5'
            value={item.users_score}
            onChange={this.onChangeNewComment}
          />
        </label>
        <button type="submit">Submit</button>
      </form>

        return (
          <div key={`newComment`} id={`newComment`}>
            {newRenderForm}
          </div>
        )
  }

  render() {
    return (
      <div>
        {this.renderArticle()}
        {this.renderFormContents()}
        {this.renderComments()}
        {
          // Redirects user to the error page should the articles fail to load.
          (this.state.loading === 'error') ? <Redirect to="/error?source=articlepage" /> : ''
        }
      </div>
    )
  }
}
