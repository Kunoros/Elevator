// import React, { useState, useEffect, useRef } from 'react';

// Import components
// import Door from './components/Door'
// import Counter from './components/Counter'
import KeyPad from './components/KeyPad'

import './App.css';



function App() {

  return (
    <div className="Main-container">
      {/* <Door className="test"/> */}
      {/* <Door className="test"/> */}
      {/* <Counter /> */}
      <KeyPad startingFloor={3} />
    </div>
  );
}

export default App;
