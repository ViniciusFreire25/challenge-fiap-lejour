import React from 'react';

import Header from './components/Header';
import Routes from './routers';
import Footer from './components/Footer';

import './styles/global.css';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
    </>
  );
}

export default App;
