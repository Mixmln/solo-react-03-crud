import React, { useContext } from 'react';
import MainContext from '../context/MainContext';
import { postReq } from '../helpers/http';

function SelectComp() {
  const { setProducts, setSelectedFilter } = useContext(MainContext);

  const filterProducts = async (event) => {
    setSelectedFilter(event.target.value);
    const bodyToSend = {
      category: event.target.value,
    };
    const result = await postReq(bodyToSend, 'filterProds');
    setProducts(result.data);
  };

  return (
    <div className='top-side-main-page'>
      <h5 className='select-title'>Kategorija:</h5>
      <select className='main-select' name='' id='' onChange={filterProducts}>
        <option value='Visi produktai'>Visi produktai</option>
        <option value='Maistas'>Maistas</option>
        <option value='Vaisiai'>Vaisiai</option>
        <option value='Pieno produktai'>Pieno produktai</option>
        <option value='Zaislai'>Zaislai</option>
        <option value='Sveriami'>Sveriami</option>
        <option value='Riesutai'>Riesutai</option>
        <option value='Saldainiai'>Saldainiai</option>
      </select>
    </div>
  );
}

export default SelectComp;
