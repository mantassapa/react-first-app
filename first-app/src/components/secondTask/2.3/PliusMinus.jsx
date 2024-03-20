import React, { useState } from 'react'

const PliusMinus = () => {
    const [number,setNumber]= useState(0)
    const plusNumber =()=>{
        setNumber((pre)=>(pre+1))
    }
    const minusNumber =()=>{
        setNumber((pre)=>(pre-3))
    }
  return (
    <div>
        <button onClick={plusNumber}>[+]</button>
        <button onClick={minusNumber}>[-]</button>
        <p>{number}</p>
    </div>
  )
}

export default PliusMinus