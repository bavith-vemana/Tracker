import React, { createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage';
import AppLayout from './pages/AppLayout';
import PageNotFound from './pages/PageNotFound';
import data from './data';
import CityList from './components/city/CityList';
import City from './components/city/City';
import Form from './components/form/Form';
import CountryList from './components/country/CountryList';

// Create a context for the data
export const DataContext = createContext();




function App() {
  const [custdata,setCustdata] = useState(data);
  console.log("App"+custdata);
  return (
    <DataContext.Provider value={[custdata,setCustdata]}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="app" element={<AppLayout />}>
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<City />} />
            <Route path="countries" element={<CountryList/>} />
            <Route path="form" element={<Form />} />
            <Route path="form?lat="/>
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
