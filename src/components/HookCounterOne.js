import React, {useState, useEffect} from 'react'

const HookCounterOne = () => {
    const [count, setCount] = useState(0)
    const [name, setName]   = useState('')


  useEffect (()=>{
    console.log("UseEffect--- Updating document title")
    document.title = `click ${count} times`
  },[count])


  return (
    <div>
      <input type = "text" value = {name} onChange={e => setName(e.target.value)}/>
        <button onClick={()=>setCount(count+1)}>Click {count} times</button>
      
    </div>
  )
}

export default HookCounterOne
