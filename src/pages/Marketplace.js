import React , {useState} from 'react';
/* Start [MRF 2021-08-16] components import */
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
/* End   [MRF 2021-08-16] components import */

const Marketplace = () => {
  return (
    <div className='marketplace'>
      <ItemListContainer greeting={'Marketplace'}/>
    </div>
  );
}
export default Marketplace;