import React from 'react';
import './App.css';
import Button from "./Button/Button";
import ButtonProps from "./ButtonProps/ButtonProps";
import Counter from './Counter/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>My React App</h1>
      <Button/>
      <ButtonProps/> 
		{/* // если просп указаны, то они обязательны для заполнения */}
		<Counter/>
    </div>
  );
}

export default App;
