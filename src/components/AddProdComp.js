import React, { useContext, useEffect, useRef, useState } from 'react';
import MainContext from '../context/MainContext';
import { postReq } from '../helpers/http';

function AddProdComp() {
  const { products, setProducts } = useContext(MainContext);

  const titleRef = useRef();
  const priceRef = useRef();
  const foodCatRef = useRef();
  const fruitCatRef = useRef();
  const dairyCatRef = useRef();
  const toyCatRef = useRef();
  const weighedCatRef = useRef();
  const nutsCatRef = useRef();
  const sweetsCatRef = useRef();
  const descriptionRef = useRef();

  let checked = [];

  const handleCheckBoxes = (ref) => {
    if (ref.current.checked) {
      if (checked.includes(ref.current.name)) return;
      checked.push(ref.current.name);
    } else {
      const filtered = checked.filter((item) => item !== ref.current.name);
      return (checked = filtered);
    }
  };

  const addNewProd = async () => {
    const newProd = {
      title: titleRef.current.value,
      price: priceRef.current.value,
      categories: checked,
      description: descriptionRef.current.value,
    };
    if (!newProd.title || !newProd.price || newProd.categories === []) return;
    const result = await postReq(newProd, 'createProd');
    if (result.error === false) {
      console.log('result from post request ===> ', result);
    }
  };

  return (
    <div className='add-prod-form'>
      <h2>Produkto sukurimas</h2>
      <div className='text-left'>
        <p>Pavadinimas</p>
        <input ref={titleRef} className='text-input' type='text' name='title' placeholder='Produkto pavadinimas' />
      </div>
      <div className='text-left'>
        <p>Kaina</p>
        <input ref={priceRef} className='text-input' type='number' step='0.01' name='price' placeholder='Produkto kaina' />
      </div>
      <div className='check-div'>
        <p>Kategorijos</p>
        <div className='checkboxes'>
          <input ref={foodCatRef} onChange={() => handleCheckBoxes(foodCatRef)} className='check-input' type='checkbox' name='Maistas' id='maistas' />
          <label htmlFor=''>Maistas</label>
        </div>
        <div className='checkboxes'>
          <input ref={fruitCatRef} onChange={() => handleCheckBoxes(fruitCatRef)} className='check-input' type='checkbox' name='Vaisiai' id='vaisiai' />
          <label htmlFor=''>Vaisiai</label>
        </div>
        <div className='checkboxes'>
          <input ref={dairyCatRef} onChange={() => handleCheckBoxes(dairyCatRef)} className='check-input' type='checkbox' name='Pieno produktai' id='pieno-produktai' />
          <label htmlFor=''>Pieno produktai</label>
        </div>
        <div className='checkboxes'>
          <input ref={toyCatRef} onChange={() => handleCheckBoxes(toyCatRef)} className='check-input' type='checkbox' name='Zaislai' id='zaislai' />
          <label htmlFor=''>Zaislai</label>
        </div>
        <div className='checkboxes'>
          <input ref={weighedCatRef} onChange={() => handleCheckBoxes(weighedCatRef)} className='check-input' type='checkbox' name='Sveriami' id='sveriami' />
          <label htmlFor=''>Sveriami</label>
        </div>
        <div className='checkboxes'>
          <input ref={nutsCatRef} onChange={() => handleCheckBoxes(nutsCatRef)} className='check-input' type='checkbox' name='Riesutai' id='riesutai' />
          <label htmlFor=''>Reisutai</label>
        </div>
        <div className='checkboxes'>
          <input ref={sweetsCatRef} onChange={() => handleCheckBoxes(sweetsCatRef)} className='check-input' type='checkbox' name='Saldainiai' id='saldainiai' />
          <label htmlFor=''>Saldainiai</label>
        </div>
      </div>
      <div className='text-left'>
        <p>Aprasymas</p>
        <input ref={descriptionRef} className='text-input' type='text' placeholder='Produkto aprasymas' />
      </div>
      <button className='add-btn' onClick={addNewProd}>
        Sukurti
      </button>
    </div>
  );
}

export default AddProdComp;
