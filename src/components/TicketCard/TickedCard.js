import React, { useEffect, useState } from "react";

import './TickedCard.scss';



function TicketCard( props ) {

  //if (!props || props.companies.length <= 1 || props.tickets.length <= 1) {
  //  return <p className="Нет данных"></p>
  //}
  let companies = props.companies,
  tickets = props.tickets;

  let calculateDuration = (milliseconds) => {
    let hours = Math.floor(milliseconds / 3600000);   
    let minutes = Math.round((milliseconds - hours*3600000)/60000);
    return `${hours}ч ${minutes}м`
  }


let calculateTime = (milliseconds) => {
    let date = new Date(milliseconds);
    let hour = date.getHours();
    let minute = date.getMinutes();
    return `${hour}:${minute}`;
}

let getTransfers = (number) => {
  let transfers = ["пересадка", "пересадки", "пересадок"];
  if (number === 1) {
    return `${number} ${transfers[0]}`
  } else if (number === (2 || 3 || 4)) {
    return `${number} ${transfers[1]}`;
  } else {
    return `${number} ${transfers[2]}`;
  } 
}

let getCompany = (companyId) => {
  return companies.find(company => company.id === companyId).logo;
}
  

  return (
    tickets.slice(0, 6).map(oneTicket => (
      <a key={oneTicket.id} href="#" className="card">
      <div className="card__common">
        <p className="card__price">{oneTicket.price} P</p>
        <div className="card__price">
          <img className="card__logo-image" src={require(`../../images/${getCompany(oneTicket.companyId)}`)} alt="Логотип компании"/>
        </div>
      </div>
      <div className="card__details">
        <div className="card__time">
          <p className="card__title">{oneTicket.info.origin} - {oneTicket.info.destination}</p>
          <p className="card__value">{calculateTime(oneTicket.info.dateStart)} - {calculateTime(oneTicket.info.dateEnd)}</p>
        </div>
        <div className="card__duration">
          <p className="card__title">В пути</p>
          <p className="card__value">{calculateDuration(oneTicket.info.duration)}</p>
        </div>
        <div className="card__transfer">
          <p className="card__title">{getTransfers(oneTicket.info.stops.length)}</p>
          <p className="card__value">{oneTicket.info.stops.join(", ")}</p>
        </div>
      </div>
      
      
    </a>
    )

  )
    //<a>ghj</a>
  )
}

export default TicketCard;
