import React from 'react'

const A = ({sqArr, number}) => {
  return (
    <div className='squeresCon'>
      {sqArr.map((_, i)=>(
          <div key={i} className="kvadr kvadr_0">{number}</div>
      ))}
    </div>
  )
}

export default A