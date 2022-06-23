import React from 'react'
import './Wave.css'
import img1 from '../../../assets/home/shape-bg.svg'

const Wave = () => {
  return (
    <div className='wave-container'>
      <div className='wave-parent'>
        <img src={img1} alt='wave image' />
      </div>
    </div>
  )
}

export default Wave
