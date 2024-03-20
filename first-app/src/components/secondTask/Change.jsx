import React, { useState } from 'react'

const Change = () => {
    const [shape, setShape] = useState("sq")
    const changeShape = () =>{
        setShape((prev)=>(prev==="sq"?"cr":"sq"))
    }
  return (
    <div>
        <button onClick={changeShape}>Change</button>
        <div className={shape}></div>
    </div>
  )
}

export default Change