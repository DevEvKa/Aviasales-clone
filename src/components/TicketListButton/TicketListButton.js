import * as React from 'react';
import Button from '@mui/material/Button';
import theme from '../../styles/Styles';

function TicketListButton() {

  const handleClick = (event) => {
    event.preventDefault();
    console.log(event.target);
  }

  return (
    <Button 
    variant="contained" 
    sx={{
      width: '100%',
      padding: '15px',
      lineHeight: '20px',
      borderRadius: '5px',
      fontWeight: '600',
      '&:hover':{
        bgcolor: theme.palette.hover.main,
        color: theme.palette.primary.main,      
      },
      '&:active':{
        bgcolor: theme.palette.hover.main,
        color: theme.palette.primary.main,      
      },
    }}
    onClick={handleClick}
    >
      Показать еще 5 билетов
      </Button>
  );
}

export default TicketListButton;
