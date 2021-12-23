import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <video src='../assets/space.mp4'></video>
      </div>
      <div className='planets'>
        <a>Sol</a>
        <a>Mercurio</a>
        <a>Venus</a>
        <a>Tierra</a>
        <a>Marte</a>
        <a>Júpiter</a>
        <a>Saturno</a>
        <a>Urano</a>
        <a>Neptuno</a>
      </div>
    </div>
  );
}

export default App;
