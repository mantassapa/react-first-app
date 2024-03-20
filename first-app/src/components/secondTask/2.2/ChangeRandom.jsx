import React, { useState } from 'react'

const ChangeRandom = () => {
    const [shape, setShape] = useState("cr")
    const changeShape = () =>{
        setShape((prev)=>(prev==="cr"?"tr":"cr"))
    }
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
      }
    
    const [number, setNumber] = useState(getRndInteger(5,25))
    const changeNumber=()=>{
        setNumber(getRndInteger(5,25))
    }
  return (
    <div>
        <button onClick={changeShape}>Change</button>
        <button onClick={changeNumber}>Random</button>
        <div className={shape}>{number}</div>
    </div>
  )
}

export default ChangeRandom