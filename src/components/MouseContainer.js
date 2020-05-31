import React,{useState} from 'react'
import HookMouse from './HookMouse'
// useEffect with Cleanup similar to componentWillUnmount
const MouseContainer = () => {
    const [display, setDisplay] = useState(true)
  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
      {display && <HookMouse/>}
    </div>
  )
}

export default MouseContainer
