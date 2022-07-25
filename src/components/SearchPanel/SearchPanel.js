import React, { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import { Box, TextField } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import "date-fns";
import ru from "date-fns/locale/ru";

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';



const StyledTextField = styled(TextField)(({ theme }) => ({
  width: '25%',
  backgroundColor: theme.palette.background.main,
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
  '& fieldset': {
    borderRadius: 0,
    padding: '10px',
    border: "none",
  },
  '&:first-child': {
    borderRadius: '5px 0 0 5px',
  },
  '&:last-child': {
    borderRadius: '0 5px 5px 0',
  },
    '& svg': {
      marginRight: '18px',
      fill: theme.palette.primary.main,
    },
    '&:hover': {
      backgroundColor: 'transparent',
    }
}));

export default function SearchPanel() {
  const [directionToValue, setDirectionToValue] = useState('');
  const [directionFromValue, setDirectionFromValue] = useState('');
  const [dateToValue, setDateToValue] = useState(null);
  const [dateFromValue, setDateFromValue] = useState(null);
  console.log(dateToValue)
  

  let value='567';
  const handleChange = () => {

  }
  return (
    <Box
      component="form"
      sx={{
        width: '100%',
        marginBottom: '20px',
        borderRadius: '5px',
      }}
      noValidate
      autoComplete="off"
    >
      <StyledTextField 
      value={directionToValue}
      onChange={(newValue) => {
        //setDirectionToValue(newValue);
      }}
      placeholder='Откуда'
      variant="outlined" 
      />
      <StyledTextField 
      value={directionFromValue}
      onChange={(newValue) => {
        setDirectionFromValue(newValue);
      }}
      placeholder='Куда' variant="outlined" />


<LocalizationProvider
    dateAdapter={AdapterDateFns}
    adapterLocale={ru} // use 'bg' locale for date parser/formatter
  >
    <DatePicker
    format="L"
      value={dateToValue}
      onChange={(newValue) => setDateToValue(newValue)}
      renderInput={( {inputProps, ...params} ) => <StyledTextField {...params} inputProps={{
        ...inputProps,
        placeholder: "Когда",
      }}
      variant="outlined" 
      />}
      inputFormat="dd MM"
      />
    <DatePicker
      value={dateFromValue}
      onChange={(newValue) => setDateFromValue(newValue)}
      renderInput={( {inputProps, ...params} ) => <StyledTextField {...params} inputProps={{
        ...inputProps,
        placeholder: "Обратно",
      }}
      variant="outlined" />}
      inputFormat="dd MM"
      />    
  </LocalizationProvider>

        



    </Box>

  )
}