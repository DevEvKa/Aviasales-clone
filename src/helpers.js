//import companies from '../src/components/TicketCard/TickedCard';

export function getPrice (number) {
    return new Intl.NumberFormat('ru-ru', { 
      style: 'currency', 
      currency: 'RUB', 
      minimumFractionDigits: 0,
    }).format(number)
  };

  export function calculateDuration (milliseconds) {
    let hours = Math.floor(milliseconds / 3600000);   
    let minutes = Math.round((milliseconds - hours*3600000)/60000);
    return `${hours}ч ${minutes}м`
  }


  export function calculateTime (milliseconds) {
      return new Date(milliseconds).toLocaleString('en-GB', {      
        hour: '2-digit',
        minute: '2-digit',       
    })
  }

  export function getTransfers (number, txt) {
    let transfers = ["пересадка", "пересадки", "пересадок"];
    if (number === 0) {
      return 'Без пересадок'
    } else if (number === 1) {
      return `${number} ${transfers[0]}`
    } else if (number === (2 || 3 || 4)) {
      return `${number} ${transfers[1]}`;
    } else {
      return `${number} ${transfers[2]}`;
    } 
  }

  export function getCompany (companyId, companies) {
    return companies.find(company => company.id === companyId).logo;
  }