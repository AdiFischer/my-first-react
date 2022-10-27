import { useState } from 'react'
import logo from './logo.svg';
import './App.css';//. in same foler as crs
const names = ['adi', 'jack', 'mido', 'eli', 'ben', 'jenny', 'alon', 'idan', 'eddi', 'noam', 'sharon', 'todd']

function App() {
  const [myName, setMyName] = useState ('Adi')
  const [counter, setCounter] = useState (0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {myName} is super cool
        </p>
       {names.map(name => (
        <button key={name} onClick={() => setMyName(name)}>{name}</button>
       ))}
        <button onClick={() => setMyName('Adi')}>Adi</button>
        <p>You clicked the button {counter} times.</p>
        <button onClick={() => setCounter(counter - 1)}>-1</button>
        <button onClick={() => setCounter(0)}>reset</button>
        <button onClick={() => setCounter(counter + 1)}>+1</button>
      </header>
    </div>
  );
}

export default App;
