import './TickedCard.scss';
//images
import companyLogo from '../../images/logo_s7.png';

function TicketCard() {
  return (
    <a href="#" className="card">
      <div className="card__common">
        <p className="card__price">13 400 P</p>
        <div className="card__price">
          <img className="card__logo-image" src={companyLogo} alt="Company logo"/>
        </div>
      </div>
      <div className="card__details">
        <div className="card__time">
          <p className="card__title">MOW - HKT</p>
          <p className="card__value">10:45 - 08:00</p>
        </div>
        <div className="card__duration">
          <p className="card__title">В пути</p>
          <p className="card__value">21ч 15м</p>
        </div>
        <div className="card__transfer">
          <p className="card__title">2 пересадки</p>
          <p className="card__value">HKJ, JNB</p>
        </div>
      </div>
      
      
    </a>
  );
}

export default TicketCard;
