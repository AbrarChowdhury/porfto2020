import React from 'react';
import './App.css';
import Banner from './sections/Banner/Banner'
import About from './sections/About/About'
import Portfolio from './sections/Portfolio/Portfolio'
import Contact from './sections/Contact/Contact'
function App() {
  return (
    <div className="App">
    <Banner/>
    <About/>
    <Portfolio/>
    <Contact/>
    </div>
  );
}

export default App;
