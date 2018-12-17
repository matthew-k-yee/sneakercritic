import React from 'react';
import { Link } from 'react-router-dom';

export default function ListItem(props) {
  const brand = props.item;
  const match = props.match;
  return (
    <article>
      <h1><Link to={`articles/?brand_id=${brand.id}`}>{brand.brand_name}</Link></h1>
    </article>
  )
}
