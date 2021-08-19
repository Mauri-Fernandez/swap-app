import React , {useState, useEffect} from 'react';
import Item  from '../Item/Item';

const ItemList = () => {
    const [characters, setCharacters] = useState([]);
    const [show, setShow] = useState(false);
    const delay = 2;
    useEffect(() => {
        let timer = setTimeout(() => setShow(true), delay * 1000); // 2 seconds time out
        fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data     => setCharacters(data)); 
        return () => {
            clearTimeout( timer );
          };
    },[]);
    return (
        <div>
            {
                characters.map(( user ) => {
                return show ? <Item key = { user.id } data = { user }/> : <div></div>;
                })
            }
        </div>
    )
}

export default ItemList;
