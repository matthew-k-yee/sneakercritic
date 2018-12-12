import React from "react";
import CommentItem from "../Article/CommentItem"

export default function Profile(props) {
  return (
    <div>
      <h1>Profile</h1>
      <h3>{props.info.first_name}</h3>
      <h3>{props.info.last_name}</h3>
      <p>{props.info.comments.map(comment => <CommentItem comment={comment}/>)}</p>
    </div>
  )
}
