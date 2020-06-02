import React, { useContext } from 'react';
import { CountContext } from '../App.js'



export default function ComponentF() {

  const countContext = useContext(CountContext)
  return (
    <div>
      <div>ComponentF {countContext.countState}</div>
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
      <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  );
}
