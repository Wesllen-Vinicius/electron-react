import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppBar from './AppBar';
import AppFooter from './components/Footer';
import Rotas from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppBar />
        <Rotas />
        <AppFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
