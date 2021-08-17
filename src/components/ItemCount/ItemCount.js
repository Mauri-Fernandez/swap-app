import React , {useState} from 'react';
import './ItemCount.css';
import swal from 'sweetalert';

const ItemCount = () => {
  const [count, setCount] = React.useState(0);
  const handleSum = () => {
    setCount(count + 1);
  }
  const handleSubtraction = () => {
    count > 0 ? setCount(count - 1) : setCount(count);
  }
  const buy = () => {
    count > 0 ? swal("Bien!", count + " ... comprado con éxito!", "success") : swal("Ops!", "Selecciona una cantidad para comprar!", "error");
  }
  return (
    <div>
      <div className="item-count-container">
        <div className="count">{count}</div>
        <button className="button" onClick={handleSum}>+</button>
        <button className="buy"    onClick={buy}>Comprar</button>
        <button className="button" onClick={handleSubtraction}>-</button>
      </div>
    </div>
  );
}
export default ItemCount;