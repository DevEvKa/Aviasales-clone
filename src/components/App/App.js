import React, { useEffect, useState } from "react";
import axios from 'axios';

//components
import Header from '../Header/Header.js';
import Transfer from '../Transfer/Transfer.js';
import Company from '../Company/Company.js';
import PreferencesButtons from '../PreferencesButtons/PreferencesButtons.js';
import TicketCard from '../TicketCard/TickedCard.js';
import TicketListButton from '../TicketListButton/TicketListButton.js';
import SearchPanel from '../SearchPanel/SearchPanel.js';

//styles
import './App.scss';

function App() {
  const [appState, setAppState] = useState({
    companies: null,
    tickets: null
  });
  
  useEffect(() => {
    const urlCompanies = 'https://api.npoint.io/a1b1c28b32d9785bb26c',
    urlTickets = 'https://api.npoint.io/163b5e66df9f2741243e'; 

    axios.all([
      axios.get(urlCompanies), 
      axios.get(urlTickets)
    ])
      .then(
         axios.spread((respCompsnies, respTickets) => {
           setAppState({
            companies: respCompsnies.data,
            tickets: respTickets.data,
           })

         })
      )
      .catch((error) => console.log(error)) 
  }, [setAppState]);


  return (
    <div className="app">
      <Header />
      <SearchPanel />
      <div className="app__content content">
        <aside className="content__options options">
          <Transfer />
          <Company />
        </aside>
        <main className="content__results results">
          <PreferencesButtons />
          <TicketCard companies={appState.companies} tickets={appState.tickets}/>
          <TicketListButton />
        </main>
      </div>
    </div>
  );
}

export default App;
