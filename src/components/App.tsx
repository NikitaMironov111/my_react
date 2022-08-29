import React from 'react';
import './App.css';
import NavBar from './NavBar';
import AppRoutes from './AppRoutes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar></NavBar>
      </header>
      <div className="container">
        <AppRoutes></AppRoutes>
      </div>
    </div>
  );
}

export default App;
