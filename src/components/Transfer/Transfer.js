import * as React from 'react';
import {useState} from 'react';
import { FormGroup, FormControlLabel, Checkbox }  from '@mui/material';

import theme from '../../styles/Styles';
import { styled } from '@mui/material/styles';
import './Transfer.scss';



const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
    margin: '0px',
    padding: '0 10px',
    borderRadius: '2px',
    backgroundColor: theme.palette.background.main,
    '& span:checked':{backgroundColor: theme.palette.background.main,},
}));

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    width: '100%',
    margin: '0px',
    padding: '10px',
    lineHeight: '20px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '&:hover':{backgroundColor: theme.palette.hover.main},      
}));




function Transfer() {


  const [transfers, setTransfers] = useState([]);

  const handleTransferChange = (event) => {
    const index = transfers.indexOf(event.target.value);
    if (index === -1) {
      setTransfers([...transfers, event.target.value]);
    } else {
      setTransfers(transfers.filter((transfer) => transfer !== event.target.value));
    }
  }

  return (
    <section className="options__transfer transfer">
      <h3 className="transfer__title">Количество пересадок</h3>
      <form  className="transfer__form form"  action="#">
        <div className="form__option option">
          <input className="option__checkbox" type="checkbox" id="transfer0" name="transfer0" value="0" />
          <label className="option__label" htmlFor="transfer0">Без пересадок</label>
        </div>
      </form>

      <h3 className="transfer__title">Количество пересадок</h3>
        <FormGroup
        sx={{
          display: 'flex',
          alignItems: 'center'
        }}>
          <StyledFormControlLabel 
            label="Без пересадок"           
            control={<StyledCheckbox value="0" checked={transfers.includes('0')} 
            onChange={handleTransferChange} 
            />}
          />
          <StyledFormControlLabel 
            label="1 пересадка"           
            control={<StyledCheckbox value="1" checked={transfers.includes('1')} 
            onChange={handleTransferChange} 
            />}
          />
          <StyledFormControlLabel 
            label="2 пересадки"           
            control={<StyledCheckbox value="2" checked={transfers.includes('2')} 
            onChange={handleTransferChange} 
            />}
          />
          <StyledFormControlLabel 
            label="3 пересадки"           
            control={<StyledCheckbox value="3" checked={transfers.includes('3')} 
            onChange={handleTransferChange} 
            />}
          />
        </FormGroup>
    </section>
  );
}

export default Transfer;
