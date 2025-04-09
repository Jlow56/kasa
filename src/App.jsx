import React from 'react';
import "./App.css";
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Card from './components/Card'; // Assurez-vous que Cards est correctement défini dans ce chemin

function App() {
  return (
    <>
      <header className='w1240 flex home-header'>
        <Navbar />
        <Banner />
      </header>
      <main className='w1240 flex'>
        <Card/>
      </main>
      <footer>

      </footer>
    </>
  );
}

export default App;
