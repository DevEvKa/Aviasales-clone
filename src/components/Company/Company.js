import * as React from 'react';
import { Box, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from '@mui/material';

import { styled } from '@mui/material/styles';
import theme from '../../styles/Styles';
import './Company.scss';


const StyledRadio = styled(Radio)(({ theme }) => ({
  margin: '0px',
  padding: '0 10px',
}));

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  width: '100%',
  margin: '0px',
  padding: '10px',
  lineHeight: '20px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  '&:hover':{backgroundColor: theme.palette.hover.main},      
}));


function Company() {
  return (
    <section className="options__company company">
      <h3 className="company__title">Компания</h3>
      <form className="company__form form"  action="#">
        <div className="company__option option">
          <input className="option__radio" type="radio" id="all" name="company-group" />
          <label className="option__label" htmlFor="all">Все</label>
        </div>
        <div className="company__option option">
          <input className="option__radio" type="radio" id="s7" name="company-group" />
          <label className="option__label" htmlFor="s7">S7</label>
        </div>
        <div className="company__option option">
          <input className="option__radio" type="radio" id="xiamenAir" name="company-group" />
          <label className="option__label" htmlFor="xiamenAir">XiamenAir</label>
        </div>
      </form>
      <Box className="options__company company"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.palette.background.main,
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
      }}
    >
      <FormControl>
      <h3 className="company__title">Компания</h3>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          defaultValue="Все"
          name="radio-buttons-group"
        >
          <StyledFormControlLabel value="Все" control={<StyledRadio />} label="Все" />
          <StyledFormControlLabel value="s7" control={<StyledRadio />} label="s7" />
          <StyledFormControlLabel value="xiamenAir" control={<StyledRadio />} label="xiamenAir" />
        </RadioGroup>
      </FormControl>
      </Box>
    </section>
  );
}

export default Company;
