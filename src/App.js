import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainContext from './context/MainContext';
import MainPage from './pages/MainPage';
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  const [selectedFilter, setSelectedFilter] = useState('Visi produktai');

  const states = {
    products,
    setProducts,
    selectedFilter,
    setSelectedFilter,
  };

  return (
    <div className='App'>
      <MainContext.Provider value={states}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<MainPage></MainPage>}></Route>
          </Routes>
        </BrowserRouter>
      </MainContext.Provider>
    </div>
  );
}

export default App;
