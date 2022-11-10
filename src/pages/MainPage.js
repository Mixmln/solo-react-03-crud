import React, { useContext, useState } from 'react';
import AddProdComp from '../components/AddProdComp';
import SelectComp from '../components/SelectComp';
import TableComp from '../components/TableComp';
import MainContext from '../context/MainContext';

function MainPage() {
  const { products, setProducts, CUCompTrigger, setCUCompTrigger } = useContext(MainContext);

  return (
    <div className='main-page'>
      <SelectComp></SelectComp>
      <div className='all-products'>
        <TableComp></TableComp>
        {!CUCompTrigger && <AddProdComp></AddProdComp>}
      </div>
    </div>
  );
}

export default MainPage;
