import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect'

const Jumbotron = ({ text, txtStyle }) => (
  <TypeWriterEffect
    textStyle={txtStyle}
    startDelay={2000}
    cursorColor='#3F3D56'
    multiText={text}
    multiTextDelay={1500}
    typeSpeed={50}
    multiTextLoop
  />
)

export default Jumbotron
