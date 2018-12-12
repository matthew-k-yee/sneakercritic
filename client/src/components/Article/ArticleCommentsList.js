import React from 'react';
import CommentItem from "./CommentItem";

export default function ArticleCommentsList(props) {
  return(
    <div>
      {props.commentlist.map(comment => <CommentItem comment={comment}/>)}
    </div>
  )
}
