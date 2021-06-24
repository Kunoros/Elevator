import React, { useState, useRef } from 'react';

// Import components
// import Door from './components/Door'
import Counter from './components/Counter'
import KeyPad from './components/KeyPad'

import './App.css';



function App() {
  // const floorOrder = useRef([])
  const [floorOrder, setFloorOrder] = useState([])
  const [startingFloor, setStartingFloor] = useState(5)
  const [doorStatus, setDoorStatus] = useState(false)

  function getFloorOrderFromKeypad(order:any) {
    setFloorOrder(order)
  }

  const toggleDoorStatus = () => {
    setDoorStatus(!doorStatus)
  }

  return (
    <div className="Main-container">
      {/* <Door className="test"/> */}
      <Counter floorOrder={floorOrder} doorStatus={doorStatus}/>
      <KeyPad startingFloor={startingFloor} getFloorOrder={getFloorOrderFromKeypad} toggleDoorStatus={toggleDoorStatus}/>
    </div>
  );
}

export default App;
