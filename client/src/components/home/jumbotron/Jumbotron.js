import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Jumbotron = ({ text }) => (
  <Typewriter
    words={['Eat', 'Sleep', 'Code', 'Repeat!']}
    loop
    cursor
    cursorStyle='_'
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
  />
)

export default Jumbotron
