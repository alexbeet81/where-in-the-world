import React from 'react';
import Container from '@mui/material/Container';
import FilterAndSearch from '../Search/FilterAndSearch';
import './CountryIndex.css';
import CountryCard from './CountryCard';
import Grid from '@mui/material/Grid';

const CountryIndex = (props) => {

  const setCountryHandler = (data) => {
    props.findCountryHandler(data)
  }

  return (
    <div className="country_index__background">
      <Container maxWidth="xl">
        <FilterAndSearch />
          <Grid container spacing={2} >
            {props.data.map((country, countryIndex) => {
                return(
                <Grid key={countryIndex} item xs={3} >
                  <CountryCard country={country} onClickHandler={setCountryHandler}/>            
                </Grid>
                )
              } 
            )}
          </Grid>
      </Container>
    </div>
  )
};

export default CountryIndex;