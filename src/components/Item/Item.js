import React                from 'react';
import './Item.css';
import ItemCount            from '../ItemCount/ItemCount';
import ItemDetailContainer  from '../ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter as Router, Switch, Route, Redirect, Link, useHistory } from 'react-router-dom';
import { Card }             from 'semantic-ui-react';

function Item ( { data } ) {
  
    return (

    <div className='item-container' key = { data.id }>  
        <Card
            image       =  { data.avatar_url }
            header      =  { data.name }
            meta        =  { data.id }
            description =  { data.login }
            className   =  'card-item'
        />
        <ItemCount 
            stock       = { 5 } 
            initial     = { 0 } 
            key         = { data.id } 
            select      = { data.login }
        />
        <div key = { data.id } >
            <Link to = { `/detail/${ data.id }`}>Detalle</Link>
        </div>
        <Router>
            <Switch>
                <Route path = '/detail/:id' component = { ItemDetailContainer }>
                </Route>
            </Switch>
        </Router>
    </div>

    )
 }

export default Item;