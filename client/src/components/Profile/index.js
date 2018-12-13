import React from 'react';

export default function Profile(props) {
  return (
    <div>
      <h1>Profile</h1>
      <h3>{props.credentials.first_name} {props.credentials.last_name}</h3>
      {/* <p>{props.credentials.comments.map(comment => <CommentItem comment={comment}/>)}</p> */}
    </div>
  )
}
