import React from 'react';
import { useParams } from 'react-router';
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
    const { id }  = useParams();
    console.log("id: " + JSON.stringify(useParams()));
    // fetch de persona por id
  return (
    <div className='detail'>
      <h1>Detail test { id } </h1>
      <ItemDetail/>
    </div>
  );
}
export default ItemDetailContainer;