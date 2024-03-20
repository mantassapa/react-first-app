import React, { useState } from 'react'

const B = ({handleGen, handleCou, sqlenght}) => {
    const [letterB , setLetterB] = useState("B")
    const hide=()=>{
        setLetterB((prev) =>(prev=== "B" ? "" : "B"))
    }
  return (
    <div style={{backgroundColor: "violet"}}>
        <button onClick={handleGen}>gen squere</button>
        <br />
        <button onClick={handleCou}>{sqlenght}</button>
        <button onClick={hide}>Hide B</button>
        <p>{letterB}</p>

    </div>
  )
}

export default B