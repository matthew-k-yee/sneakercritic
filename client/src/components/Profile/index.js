import React from 'react';
import './Profile.css'


const renderCommentItem = (item, index,props) => {
  const user = props.credentials;
  console.log(item);

  const updatedAt = item.updated_at === item.created_at
  ? <p><span>created at</span> {new Date(item.created_at).toLocaleString('en-us')} </p>
  : <p><span>updated at</span> {new Date(item.updated_at).toLocaleString('en-us')} </p>


          const newRenderForm =  <form onSubmit={props.onSubmit} className="NewCommentsForm">
            <label>
              first_name:
              <input
                type='text'
                name='first_name'
                value={user.first_name}
                onChange={props.onChange}
              />
            </label>
            <label>
              last_name:
              <input
                type='text'
                name='last_name'
                value={user.last_name}
                onChange={props.onChange}
              />
            </label>
            <label>
              user_name:
              <input
                type='text'
                name='user_name'
                value={user.user_name}
                onChange={props.onChange}
              />
            </label>
            <button type="submit">Submit</button>
          </form>

          const renderPost =
          <div key={`comment-post-${index}`} id={`comment-post-${index}`}><h1>{item.title}</h1>
          <h1>{user.user_name}</h1>
          {updatedAt}
          <p>{item.text}</p>
        </div>




        const render = item.inEditMode  ? newRenderForm  : renderPost

        return (
          <div className= 'profile-comments' key={`comment-${index}`} id={`comment-${index}`}>
            {render}
          </div>
        )

      }

      // taken from full.js
      const renderComments = (props) => {
        console.log('we are in r c');
        return (
          props.credentials.comments.map((item, index) => renderCommentItem(item, index,props))
        )

      }



      export default function Profile(props) {
        const renderCommentss = (props.isLogedin && props.credentials.comments.length > 0) ? renderComments(props) : null
        const renderProfile = props.isLogedin ? <h3>{props.credentials.first_name} {props.credentials.last_name}</h3> : <h3>Please log in.</h3>
        return (
          <div className= 'profile-box'>
            <h1>Profile</h1>
            <div className='testing'>
              {renderProfile}
            </div>
            <div className='profile-wrapper'>
              {renderCommentss}
            </div>
          </div>
        )
      }
