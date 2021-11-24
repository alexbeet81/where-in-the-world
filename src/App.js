import './App.css';
import React, { useState, useEffect } from 'react';
import CountryIndex from './components/Countries/CountryIndex';
import CountryShow from './components/Countries/CountryShow';
import NavBar from './components/UI/NavBar';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState([]);

  // api call goes here
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
    .then(resp => {
      setCountries(resp.data)
      // console.log(resp)
    })
    .catch(resp => {
      console.log(resp)
    })
  }, [])

  const findCountry = (count) => {
    setCountry(count);
  };
  
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<CountryIndex findCountryHandler={findCountry} data={countries}/>}/>
        <Route path="/:name" element={<CountryShow data={country}/>}/>
      </Routes>
    </Router>
  );
}

export default App;