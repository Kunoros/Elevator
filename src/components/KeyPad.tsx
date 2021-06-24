import React, { useRef } from 'react';

type Props = {
  startingFloor: any,
  getFloorOrder: any,
  toggleDoorStatus: any
}

const KeyPad: React.FC<Props> = (props) => {
  const keyPadNumber = [0, 1, 2, 3, 4, 5]
  const floors = useRef([props.startingFloor])
  let buttonInputTimeOut: any

  function numPadFloorNumber(numPadFloorNumber: number) {
    const test = floors.current.includes(numPadFloorNumber)
    if (test === false) {
      floors.current.push(numPadFloorNumber)
    }
    clearTimeout(buttonInputTimeOut)
    buttonInputTimeOut = setTimeout(floorCountDown, 3000)
  }

  function floorCountDown() {
    if (floors.current[0] === 0) {
      floors.current.sort((a, b) => { return a - b })
    } if (floors.current[0] === 5) {
      floors.current.sort((a, b) => { return b - a })
    } else {
      // ! not working
    }
    props.getFloorOrder(floors.current)
    props.toggleDoorStatus()
  }

  return (
    <div className="keyPad">
      <div>
        {keyPadNumber.map(numbers => {
          return (
              <button key={numbers} type={'button'} onClick={() => numPadFloorNumber(numbers)}>{numbers}</button>
          )
        })}
      </div>
    </div>
  );
}

export default KeyPad;
