import React           from 'react';
import { Card }        from 'semantic-ui-react';
import './Item.css';
import ItemCount       from '../ItemCount/ItemCount';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

const Item = ( { data } ) => (
    <div className='item-container'>  
        < ItemDetailContainer 
            data        = { data } 
        />
        <ItemCount 
            stock       = { 5 } 
            initial     = { 0 } 
            key         = { data.id } 
            select      = { data.login }
        />
    </div>
)

export default Item;