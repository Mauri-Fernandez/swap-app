import React from 'react';
import './ItemDetail.css';


// incluir descripcion , foto y precio //

function ItemDetail( { data } ) {
  return (
    <div className='itemDetail'>
      <img src= { data.avatar_url }></img>
      <h1>{ data.login }</h1>
    </div>
  );
}
export default ItemDetail;