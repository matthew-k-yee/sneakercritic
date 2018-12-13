// Importing Packages
import React from 'react';
import { Link } from 'react-router-dom';

// Article Item Component
export default function ListItem(props) {
  const article = props.item;
  const match = props.match;
  return (
    <article>
      <h1><Link to={`${match.path}/${article.id}`}>{article.title}</Link></h1>
      <ul>
        <li>
          {new Date(article.updated_at).toLocaleString('en-us')}
        </li>
        <li>
          <Link to={`${match.path}/${article.id}#comments`}>{article.comments.length} Comments</Link>
        </li>
        <li>
          Category: <Link to={`${match.path}/?sneaker_id=${article.sneaker_id}`}>{article.sneaker.name}</Link>
        </li>
      </ul>
      <div>
        <p>{article.text}</p>
      </div>
    </article>
  )
}
