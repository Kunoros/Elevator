import React, {useState} from 'react';

type Props = {
  floorOrder: any,
  doorStatus: any
}

const Counter: React.FC<Props> = (props) => {
  const [floorNumber, setFloorNumber] = useState()

  const test = () => {
    // waneer doorStatus === true,loop throug floorOrder en update <h1></h1>
    return <h1>test</h1>
  }

  return (
    <div>
      {props.doorStatus ? (test()) : null}
    </div>
  );
}

export default Counter;
