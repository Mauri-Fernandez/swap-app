import React , {useState} from 'react';
/* Start [MRF 2021-08-16] components import */
import ItemCount            from '../components/ItemCount/ItemCount';
/* End   [MRF 2021-08-16] components import */

const Marketplace = () => {
  return (
    <div className='marketplace'>
      <h1>Marketplace</h1>
      <ItemCount stock={5} initial={0}/>
    </div>
  );
}
export default Marketplace;