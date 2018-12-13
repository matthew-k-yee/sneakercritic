import React from 'react';

export default function List(props) {
  console.log(props.brands);
  return (
    <div>
      {props.brands.map(item => (<h1>{item.brand_name}</h1>))}
      hi
    </div>
  )
}
