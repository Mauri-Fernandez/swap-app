import React , {useState, useReducer} from 'react';
import './ItemCount.css';
import swal from 'sweetalert';

const ItemCount = ({ stock, initial }) => {

  const initialState = {count: initial};
  const stockState = {count: stock};
  const reducer = (state, action) =>  {
    switch (action.type) {
      case 'increment':
        return state.count < stockState.count ? {count: state.count + 1} : {count: state.count };
      case 'decrement':
        return state.count > 0 ? {count: state.count - 1} : {count: state.count };
      default:
        throw new Error();
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const buy = () => {
    state.count > 0 ? swal("Bien!", state.count + " ... comprado con éxito!", "success") : swal("Ops!", "Selecciona una cantidad para comprar!", "error");
  }
  return (
    <div>
      <div className="item-count-container">
        <div    className="count">{state.count}</div>
        <button className="button" id="add-btn" onClick={() => dispatch({type: 'increment'})}>+</button>
        <button className="buy"                 onClick={buy}>Comprar</button>
        <button className="button"              onClick={() => dispatch({type: 'decrement'})}>-</button>
      </div>
    </div>
  );
}
export default ItemCount;