import React           from 'react';
import { Card }        from 'semantic-ui-react';
import './Item.css';
import ItemCount       from '../ItemCount/ItemCount';

const Item = ( { data } ) => (
    <div className='item-container'>  
        <Card
            image       =  { data.avatar_url }
            header      =  { data.name }
            meta        =  { data.id }
            description =  { data.login }
            className   =  'card-item'
        />
        <ItemCount stock = { 5 } initial = { 0 } key = { data.id } select = { data.login }/>
    </div>
)

export default Item;