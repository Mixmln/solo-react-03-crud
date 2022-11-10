import React, { useContext, useEffect } from 'react';
import MainContext from '../context/MainContext';
import { MdDeleteOutline, MdRepeat } from 'react-icons/md';
import { deleteReq, getReq } from '../helpers/http';

function TableComp() {
  const { products, setProducts, selectedFilter, setSelectedFilter } = useContext(MainContext);

  useEffect(() => {
    const getProducts = async () => {
      const result = await getReq('getProducts');
      console.log('result ===', result);
      if (result.error === false) {
        setProducts(result.data);
      }
    };
    getProducts();
  }, []);

  const deleteProduct = async (product) => {
    const result = await deleteReq('delete', product._id);
    console.log('result from delete request ===> ', result);
    if (!result.error) {
      setProducts(result.data);
    }
  };

  return (
    <table className='table-main'>
      <thead>
        <tr>
          <th colSpan={6} className='all-prods-title'>
            {selectedFilter}
          </th>
        </tr>
      </thead>
      <thead>
        <tr>
          <th>Id</th>
          <th>Pavadinimas</th>
          <th>Kaina</th>
          <th>Aprasymas</th>
          <th>Kategorijos</th>
          <th>btns</th>
        </tr>
      </thead>
      <tbody>
        {products &&
          products.map((prod, ind) => (
            <tr key={ind}>
              <td>{ind + 1}</td>
              <td>{prod.title}</td>
              <td>{prod.price} $</td>
              <td>{prod.description}</td>
              <td>{prod.categories.join(', ')}</td>
              <td className='single-prod-btns'>
                <MdDeleteOutline className='delete-btn' onClick={() => deleteProduct(prod)} />
                <MdRepeat className='update-btn' />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default TableComp;
