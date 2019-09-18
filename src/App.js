import React from 'react';
import Header from './containers/Header';
import Footer from './containers/Footer';
import Home from './containers/Home';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
