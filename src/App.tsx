import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import AllProduct from './pages/AllProducts/AllProduct';
import StockDetail from './pages/StockDetail/StockDetail';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<AllProduct />}></Route>
        <Route path="stock" >
        <Route index element={<StockDetail />} />
          <Route path=":prodId" element={<StockDetail />}></Route>
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
