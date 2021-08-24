import React from 'react';
import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';


function ItemDetailContainer({ data }) {
  return (
    <div className='itemDetailContainer'>
      <ItemDetail data = { data }/>
    </div>
  );
}
export default ItemDetailContainer;