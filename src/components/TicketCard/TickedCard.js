import React, { useEffect, useState } from "react";
import { getPrice, calculateDuration, calculateTime, getTransfers, getCompany }  from '../../helpers';

import './TickedCard.scss';



function TicketCard( props ) {

  // if (!props || props.companies.length <= 1 || props.tickets.length <= 1) {
  //   return <p className="Нет данных"></p>
  // }

  
  let companies = props.companies,
  tickets = props.tickets;

  return (
    tickets?.slice(0, 6).map(oneTicket => (
      <a key={oneTicket.id} href="#" className="card">
      <div className="card__common">
        <p className="card__price">{getPrice(oneTicket.price)}</p>
        <div className="card__price">
          <img className="card__logo-image" src={require(`../../images/${getCompany(oneTicket.companyId, companies)}`)} alt="Логотип компании"/>
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
  )

}

export default TicketCard;
