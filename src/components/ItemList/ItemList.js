import React , {useState, useEffect} from 'react';
import Item  from '../Item/Item';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';

const ItemList = () => {
    const [characters, setCharacters] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const delay = 2;
    useEffect(() => {
        let timer = setTimeout(() => setIsLoading(false), delay * 1000); // 2 seconds time out
        fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(data     => setCharacters(data)); 
        return () => {
            clearTimeout( timer );
          };
    },[]);
    //
    return (
        <div>
           
            {
                isLoading ? <Spinner /> : 
                characters.map(( user ) => {
                return <Item key = { user.id } data = { user }/>;
                })
            }
        </div>
    )
}

export default ItemList;
