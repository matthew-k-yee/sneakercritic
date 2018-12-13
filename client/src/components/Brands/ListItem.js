// Importing Packages
import React from 'react';
import { Link } from 'react-router-dom';

// Article Item Component
export default function ListItem(props) {
  const brand = props.item;
  const match = props.match;
  return (
    <article>
      <h1><Link to={`articles/?brand_id=${brand.id}`}>{brand.brand_name}</Link></h1>
      <ul>
        {/* <li>
          {new Date(brand.updated_at).toLocaleString('en-us')}
        </li> */}
      </ul>
    </article>
  )
}
