import React, { useContext } from 'react';
import AddProdComp from '../components/AddProdComp';
import SelectComp from '../components/SelectComp';
import TableComp from '../components/TableComp';
import UpdateComp from '../components/UpdateComp';
import MainContext from '../context/MainContext';

function MainPage() {
  const { CUCompTrigger } = useContext(MainContext);

  return (
    <div className='main-page'>
      <SelectComp></SelectComp>
      <div className='all-products'>
        <TableComp></TableComp>
        {!CUCompTrigger && <AddProdComp></AddProdComp>}
        {CUCompTrigger && <UpdateComp></UpdateComp>}
      </div>
    </div>
  );
}

export default MainPage;
