import './Company.scss';


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
    </section>
  );
}

export default Company;
