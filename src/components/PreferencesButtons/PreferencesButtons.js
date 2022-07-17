import './PreferencesButtons.scss';


function PreferencesButtons() {
  return (
    <div className="preferences">
        <button className="preferences__criterion criterion criterion_cheapest criterion_checked">Самый дешевый</button>
        <button className="preferences__criterion criterion criterion_fastest">Самый быстрый</button>
        <button className="preferences__criterion criterion criterion_optimal">Оптимальный</button>
    </div>
  );
}

export default PreferencesButtons;
