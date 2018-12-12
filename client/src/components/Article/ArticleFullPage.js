import React from 'react';
import ArticleCommentsList from "./ArticleCommentsList";

export default function ArticleFullPage(props)  {

  return  (
    <div>
      <h1>{props.fullArticle.title}</h1>
      <p>{props.fullArticle.text}</p>
      <p>Score: {props.fullArticle.site_score}</p>
      <ArticleCommentsList commentlist={props.fullArticle.comments}/>
  </div>
  )
}
