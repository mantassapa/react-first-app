import React, { useState } from 'react'

const D = () => {
    const [addSq, setAddSq]= useState([])
  return (
    <div>
        <button onClick={()=>setAddSq((prev)=>[...prev, "red"])}>Add red</button>
        <button onClick={()=>setAddSq((prev)=>[...prev, "blue"])}>Add Blue</button>
        <button onClick={()=>setAddSq([])}>Reset</button>
        {console.log(addSq)}
        <div>{addSq.map((kv,i)=>{
            <div key={i} className="kvadr" style={{backgroundColor: kv}}></div>
        })}</div>
    </div>
  )
}

export default D