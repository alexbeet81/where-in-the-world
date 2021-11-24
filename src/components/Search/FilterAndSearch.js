import React from 'react';
import Filter from './Filter';
import SearchBar from './SearchBar';
import Box from '@mui/material/Box';
import './FilterAndSearch.css'

const FilterAndSearch = () => {

  const fetchUserSearch = (data) => {
    console.log(data)
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between'}} 
         mt={4}
         mb={4}>
      <SearchBar userSearch={fetchUserSearch} />
      <Filter />
    </Box>
  )
};

export default FilterAndSearch;