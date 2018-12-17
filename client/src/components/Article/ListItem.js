import React from 'react';
import { Link } from 'react-router-dom';

export default function ListItem(props) {
  const article = props.item;
  const match = props.match;
  return (
    <article>
      <h1><Link to={`${match.path}/${article.id}`}>{article.title}</Link></h1>
      <ul>
        <li>
          <p>{article.text}</p>
        </li>
        <li>
          {new Date(article.updated_at).toLocaleString('en-us')}
        </li>
        <li>
          <Link to={`${match.path}/${article.id}#comments`}>{article.comments.length} Comments</Link>
        </li>
        <li>
          Category:
          <Link
            to={{
              pathname: match.path,
              search: `?sneaker_id=${article.sneaker_id}`,
            }}
          >
            {article.sneaker.name}
          </Link>
        </li>
      </ul>
    </article>
  )
}
