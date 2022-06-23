import React, { useState } from 'react'
import './Header.css'
import Navbar from '../navbar/Navbar'
import { Link } from 'react-scroll'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../../../assets/header/WA-logo.png'

const Header = () => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: <FontAwesomeIcon icon={faBars} />,
  })

  // State of our button
  const [disabled, setDisabled] = useState(false)

  // Toggle menu
  const handleMenu = () => {
    disableMenu()
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
        menuName: <FontAwesomeIcon icon={faTimes} />,
      })
    } else if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: <FontAwesomeIcon icon={faBars} />,
      })
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: <FontAwesomeIcon icon={faTimes} />,
      })
    }
  }

  // when Logo or contactMe is clicked while the menu is open -> close menu and go home
  const handleHeaderOptionsInMenu = () => {
    if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: <FontAwesomeIcon icon={faBars} />,
      })
    }
  }

  //Determine if out menu button should be disabled
  const disableMenu = () => {
    setDisabled(!disabled)
    setTimeout(() => {
      setDisabled(false)
    }, 1200)
  }

  return (
    <header>
      <div className='container'>
        <div className='wrapper'>
          <div className='inner-header'>
            <div className='menu'>
              <button disabled={disabled} onClick={handleMenu}>
                {state.menuName}
              </button>
            </div>
            <div className='logo'>
              <Link
                to='Home'
                smooth={true}
                duration={1000}
                delay={1000}
                onClick={handleHeaderOptionsInMenu}
              >
                <img src={logo} alt='logo' />
                {/* WA~ */}
              </Link>
            </div>
            <div className='contact-action'>
              <Link
                to='contactMe'
                smooth={true}
                duration={1000}
                delay={1000}
                onClick={handleHeaderOptionsInMenu}
              >
                ContactMe
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Navbar state={state} setState={setState} />
    </header>
  )
}

export default Header
