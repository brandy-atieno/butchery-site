import React from 'react'
import './App.css';
import Nav from './components/Nav'
import Caroussel from './components/Caroussel'
import Card from './components/Card'
import Footer from './components/Footer'
function App() {
  return (
    <div className="App">
      <Nav/>
      <Caroussel/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
