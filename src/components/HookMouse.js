import React, {useState,useEffect} from 'react'
// Using run effect only once and we have mimicked componentDidMount
const HookMouse = () => {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e=>{
        console.log("Mouse event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("useEffect called")
        window.addEventListener('mousemove', logMousePosition)
// component unmount code is written inside useEffect as a function and is returned saving from memory leakage
        return () => {
          console.log("componet  unmounting code")
          window.removeEventListener('mousemove',logMousePosition)
        }
    },[])

  return (
    <div>
      Hooks:
      <br/>

      X -> {x}
      <br/>
      Y -> {y}
    </div>
  )
}

export default HookMouse
