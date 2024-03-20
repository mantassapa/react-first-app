import React from 'react'

const AA = ({letterA, handleClick}) => {
    
  return (
    <div>
        <button onClick={handleClick}>Show A</button>
        <p>{letterA}</p>
    </div>
  )
}

export default AA