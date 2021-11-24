import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';

const SearchBar = (props) => {
  const [enteredSearch, setEnteredSearch] = useState('')

  const fetchUserSearch = (data) => {
    setEnteredSearch(data.target.value)
    console.log(data.target.value)
  }

  const submitHandler = (data) => {
    data.preventDefault();
    props.userSearch(enteredSearch)
    setEnteredSearch('')
  }

  return (
    <Box>
      <FormControl sx={{ width: '25ch' }}
                   onSubmit={submitHandler}
                   >
        <form onSubmit={submitHandler}>
          <TextField 
            id="outlined-basic" 
            onChange={fetchUserSearch}
            value={enteredSearch}
            fullWidth 
            label="Search for a country..." 
            variant="outlined" 
            InputProps={{
              startAdornment: <InputAdornment position="start">
                <FontAwesomeIcon className="nav_bar__moon" icon={faSearch} />
              </InputAdornment>,
            }}
            />
        </form>
        </FormControl>
    </Box>
  )
};

export default SearchBar;