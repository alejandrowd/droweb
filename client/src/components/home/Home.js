import React from 'react'
import './Home.css'
/* import Header from './header/Header' */
import Profile from './profile/Profile'
import Wave from './wave-footer/Wave'

const Home = () => {
  return (
    <div className='home-container' id='Home'>
      {/* <Header /> */}
      <Profile />
      <Wave />
    </div>
  )
}

export default Home
