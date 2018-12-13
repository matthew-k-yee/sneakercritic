import React from 'react';

export default function CommentItem(props) {

  return(
    <div>
      <h3>{props.comment.title}</h3>
      <p>{props.comment.text}</p>
      <p>User's Score: {props.comment.users_score}</p>
    </div>
  )
}
