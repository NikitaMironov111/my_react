import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar';
import AppRoutes from './AppRoutes';
import Context from '../context/context';
import ModalLogin from './ModalLogin';
import Login from './Login';

function App() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <Context.Provider value={{ openModal, setOpenModal }}>
      <div className="App">
        <Login></Login>
        <header className="App-header">
          <NavBar></NavBar>
        </header>
        <div className="container">
          <AppRoutes></AppRoutes>
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
