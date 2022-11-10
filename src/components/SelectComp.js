import React, { useContext } from 'react';
import MainContext from '../context/MainContext';

function SelectComp() {
  const { products, setProducts, selectedFilter, setSelectedFilter } = useContext(MainContext);

  const setFilter = (value) => {
    if (value === 0) {
      setSelectedFilter('Visi produktai');
    }
    if (value === 1) {
      setSelectedFilter('Maistas');
    }
    if (value === 2) {
      setSelectedFilter('Vaisiai');
    }
    if (value === 3) {
      setSelectedFilter('Pieno produktai');
    }
    if (value === 4) {
      setSelectedFilter('Zaislai');
    }
    if (value === 5) {
      setSelectedFilter('Sveriami');
    }
    if (value === 6) {
      setSelectedFilter('Riesutai');
    }
    if (value === 7) {
      setSelectedFilter('Saldainiai');
    }
  };

  return (
    <div className='top-side-main-page'>
      <h5 className='select-title'>Kategorija:</h5>
      <select className='main-select' name='' id=''>
        <option value='0' defaultValue={0} onChange={setFilter}>
          Visi produktai
        </option>
        <option value='1'>Maistas</option>
        <option value='2'>Vaisiai</option>
        <option value='3'>Pieno produktai</option>
        <option value='4'>Zaislai</option>
        <option value='5'>Sveriami</option>
        <option value='6'>Riesutai</option>
        <option value='7'>Saldainiai</option>
      </select>
    </div>
  );
}

export default SelectComp;
