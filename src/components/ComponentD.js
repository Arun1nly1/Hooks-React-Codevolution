import React, { useContext } from 'react';
import { CountContext } from './App.js'
// video 65 useReducer and useContext



export default function ComponentD() {

  const countContext = useContext(CountContext)
  return (
    <div>
      ComponentD {countContext.countState}
      <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
      <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
    </div>
  );
}
