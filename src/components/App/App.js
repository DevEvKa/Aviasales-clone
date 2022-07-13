//components
import Header from '../Header/Header.js';
import Transfer from '../Transfer/Transfer.js';
import Company from '../Company/Company.js';
import PreferencesButtons from '../PreferencesButtons/PreferencesButtons.js';
import TicketCard from '../TicketCard/TickedCard.js';
import TicketListButton from '../TicketListButton/TicketListButton.js';

//styles
import './App.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__content content">
        <aside className="content__options options">
          <Transfer />
          <Company />
        </aside>
        <main className="content__results results">
          <PreferencesButtons />
          <TicketCard />
          <TicketCard />
          <TicketCard />
          <TicketListButton />
        </main>
      </div>
    </div>
  );
}

export default App;
