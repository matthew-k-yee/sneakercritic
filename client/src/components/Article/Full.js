// Importing Packages
import React, { Component } from 'react';
import './Article.css'
import {  Redirect } from 'react-router-dom';
import axios from 'axios';

export default class Full extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      data: {
        comments: [],
        sneaker: {},
      },
      newComment: {
        id: 0,
        title: '',
        text: '',
        users_score: 0,
        user_id: (!!this.props.credentials.id) ? Number(this.props.credentials.id) : 1,
        article_id: Number(this.props.match.params.id),
        inEditMode: false,
        editable: true,

      },
      users: [],
      id: Number(this.props.match.params.id)
    }
    console.log(props);
  }

    makeEditabler = (comments) => {
      comments.forEach(comment => {
      comment.inEditMode = false;
      comment.editable = this.state.newComment.user_id === comment.user_id ? true : false;})
      return comments;
    }
   componentDidMount = async () => {
    const users = await this.getUsers();
    console.log(users);
    const data = await this.getArticle();

    if(data && data.comments && data.comments.length > 0) {
      data.comments.forEach(comment => {
      comment.inEditMode = false;
      comment.editable = this.state.newComment.user_id === comment.user_id ? true : false;})}
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
      const article = this.state.data;
      const renderImage =  (
        article.sneaker && article.sneaker.sneaker_image) ? <img src={`/resources/${article.sneaker.sneaker_image}`} alt={`${article.sneaker.name}`} />
      : <div>Loading</div>

      return (
        <div>
          <h1>{article.title}</h1>
          <p>{article.text}</p>
          {renderImage}
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
    this.setState(
      prevState => {
        return {
          data: {
            ...prevState.data,
            comments: comments,
          }
        }
      }
    );

  }

  toggleCommentinEditable = (index) => {
    const comments = this.state.data.comments;
    comments[index].editable = !comments[index].editable;
    this.setState(
      prevState => {
        return {
          data: {
            ...prevState.data,
            comments: comments,
          }
        }
      }
    );

  }

  onChangeComment = (evt,index) => {
    const comments = this.state.data.comments;
    const {name, value} = evt.target
    comments[index][name] = value;

    this.setState(
      prevState => {
        return {
          data: {
            ...prevState.data,
            comments: comments,
          }
        }
      }
    );

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
      id: 0,
      title: '',
      text: '',
      users_score: 0,
      user_id: (!!this.props.credentials.id) ? Number(this.props.credentials.id) : 1,
      article_id: Number(this.state.id),
      inEditMode: false,
      editable: true,
    }
    let newwComment = resp.data.comment;
    newwComment.inEditMode = false;
    newwComment.editable = true;
    const comments = [newwComment,...this.state.data.comments];

    this.setState( prevState => {
      return {
      blankComment,
      data: {
        ...prevState.data,
        comments: comments,
      }
    }
    });
  }

  deleteButton = async (id,index) => {
    let comments = this.state.data.comments.filter((item) => item.id !== id);
    comments = this.makeEditabler(comments);

    const resp = await axios.delete(
      `${this.props.server_url}/comments/${id}`
    );
    console.log(resp.data);
    this.setState(
      prevState => {
        return {
          data: {
            ...prevState.data,
            comments: comments,
          }
        }
      }
    );

  }

  renderCommentItem = (item, index) => {
    const user = this.state.users.filter(useritem => useritem.id === item.user_id)[0];
    console.log(user);
    ///// time created
    const updatedAt = item.updated_at === item.created_at
    ? <p><span>created at</span> {new Date(item.created_at).toLocaleString('en-us')} </p>
    : <p><span>updated at</span> {new Date(item.updated_at).toLocaleString('en-us')} </p>

    ///// Edit button
    const editSaveButton = item.editable
    ? <div className="comment-edit-button-div">
      <button className="comment-edit-button"
        type='button'
        onClick={() => this.toggleCommentEditMode(index)}>
        edit </button>
      </div>
    : <div className="comment-edit-button-div">
        <button className="comment-edit-button"
          type='button'
          >
          edit </button>
        </div>

    //// Delete Button
    const deleteButton = item.editable
    ? <div className="comment-delete-button-div">
      <button className="comment-delete-button"
        type='button'
        onClick={ () => this.deleteButton(item.id,index)}>
        delete
      </button>
     </div>
    : <div className="comment-delete-button-div">
      <button className="comment-delete-button"
        type='button'
        >
        delete
      </button>
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

      const renderPost =
      <div className='commentbox' key={`comment-post-${index}`} id={`comment-post-${index}`}>
        <h1>{item.title}</h1>
        <h3>by: {user.user_name}</h3>
        {updatedAt}
        <p>{item.text}</p>
        <div className='cb-container'>
          {deleteButton}
          {editSaveButton}
        </div>
      </div>




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
          Title:
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
      <div className = 'ArticlePage'>
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
