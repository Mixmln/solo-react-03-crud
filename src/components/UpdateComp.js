import React, { useContext, useEffect, useRef } from 'react';
import MainContext from '../context/MainContext';
import { putReq } from '../helpers/http';

function UpdateComp() {
  const { setProducts, setCUCompTrigger, prodToUpdate } = useContext(MainContext);

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

  const resetInputs = () => {
    titleRef.current.value = '';
    priceRef.current.value = '';
    foodCatRef.current.checked = false;
    fruitCatRef.current.checked = false;
    dairyCatRef.current.checked = false;
    toyCatRef.current.checked = false;
    weighedCatRef.current.checked = false;
    nutsCatRef.current.checked = false;
    sweetsCatRef.current.checked = false;
    descriptionRef.current.value = '';
  };

  let checked = [];

  useEffect(() => {
    titleRef.current.value = prodToUpdate.title;
    priceRef.current.value = prodToUpdate.price;
    descriptionRef.current.value = prodToUpdate.description;
    foodCatRef.current.checked = prodToUpdate.categories.find((cat) => (cat === foodCatRef.current.name ? true : false));
    fruitCatRef.current.checked = prodToUpdate.categories.find((cat) => (cat === fruitCatRef.current.name ? true : false));
    dairyCatRef.current.checked = prodToUpdate.categories.find((cat) => (cat === dairyCatRef.current.name ? true : false));
    toyCatRef.current.checked = prodToUpdate.categories.find((cat) => (cat === toyCatRef.current.name ? true : false));
    weighedCatRef.current.checked = prodToUpdate.categories.find((cat) => (cat === weighedCatRef.current.name ? true : false));
    nutsCatRef.current.checked = prodToUpdate.categories.find((cat) => (cat === nutsCatRef.current.name ? true : false));
    sweetsCatRef.current.checked = prodToUpdate.categories.find((cat) => (cat === sweetsCatRef.current.name ? true : false));
    if (foodCatRef.current.checked) checked.push(foodCatRef.current.name);
    if (fruitCatRef.current.checked) checked.push(fruitCatRef.current.name);
    if (dairyCatRef.current.checked) checked.push(dairyCatRef.current.name);
    if (toyCatRef.current.checked) checked.push(toyCatRef.current.name);
    if (weighedCatRef.current.checked) checked.push(weighedCatRef.current.name);
    if (nutsCatRef.current.checked) checked.push(nutsCatRef.current.name);
    if (sweetsCatRef.current.checked) checked.push(sweetsCatRef.current.name);
  }, [prodToUpdate]);

  const handleCheckBoxes = (ref) => {
    if (ref.current.checked) {
      if (checked.includes(ref.current.name)) return;
      checked.push(ref.current.name);
    } else {
      const filtered = checked.filter((item) => item !== ref.current.name);
      return (checked = filtered);
    }
  };

  const updateProd = async () => {
    const updatedProd = {
      _id: prodToUpdate._id,
      title: titleRef.current.value,
      price: priceRef.current.value,
      categories: checked,
      description: descriptionRef.current.value,
    };
    if (!updatedProd.title || !updatedProd.price || updatedProd.categories === []) return;
    const result = await putReq(updatedProd, 'updateProd');
    if (result.error === false) {
      resetInputs();
      setProducts(result.data);
      setCUCompTrigger(false);
    } else {
      console.log('Kazkas negerai');
    }
  };

  return (
    <div className='update-prod-form'>
      <h2>Produkto atnaujinimas</h2>
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
      <button className='update-btn' onClick={updateProd}>
        Atanujinti
      </button>
    </div>
  );
}

export default UpdateComp;
