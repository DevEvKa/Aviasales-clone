import './Transfer.scss';


function Transfer() {
  return (
    <section className="options__transfer transfer">
      <h3 className="transfer__title">Количество пересадок</h3>
      <form  className="transfer__form form"  action="#">
        <div className="form__option option">
          <input className="option__checkbox" type="checkbox" id="transfer0" name="transfer0" value="0" />
          <label className="option__label" htmlFor="transfer0">Без пересадок</label>
        </div>
        <div className="form__option option">
          <input className="option__checkbox" type="checkbox" id="transfer1" name="transfer1" value="1" />
          <label className="option__label" htmlFor="transfer1">1 пересадка</label>
        </div>
        <div className="form__option option">
          <input className="option__checkbox" type="checkbox" id="transfer2" name="transfer2" value="2" />
          <label className="option__label" htmlFor="transfer2">2 пересадки</label>
        </div>
        <div className="form__option option">
          <input className="option__checkbox" type="checkbox" id="transfer3" name="transfer3" value="3" />
          <label className="option__label" htmlFor="transfer3">3 пересадки</label>
        </div>
      </form>
    </section>
  );
}

export default Transfer;
