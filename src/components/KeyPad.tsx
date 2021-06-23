import React, { useRef } from 'react';

type Props = {
  startingFloor: any
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
    } if (floors.current[0] === 6) {
      floors.current.sort((a, b) => { return b - a })
    } else {
      console.log('starting floor is not 0 or 6!')
    }
    console.log(floors)
  }

  return (
    <div className="keyPad">
      <div>
        {keyPadNumber.map(numbers => {
          return (
            <div>
              <button key={numbers} type={'button'} onClick={() => numPadFloorNumber(numbers)}>{numbers}</button>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default KeyPad;
