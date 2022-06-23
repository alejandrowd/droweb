import React, { useState, useRef, useEffect } from 'react'
import './Navbar.css'
import gsap from 'gsap'
import { Link } from 'react-scroll'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Navbar = ({ state, setState }) => {
  // vars for our animated dom nodes
  let menu = useRef(null)
  let revealMenu = useRef(null)
  let revealMenuBackground = useRef(null)
  let line1 = useRef(null)
  let line2 = useRef(null)
  let line3 = useRef(null)

  useEffect(() => {
    if (state.clicked === false) {
      //close menu
      gsap.to([revealMenu, revealMenuBackground], {
        duration: 0.8,
        height: 0,
        ease: 'power3.inOut',
        stagger: {
          amount: 0.07,
        },
      })
      gsap.to(menu, {
        duration: 1,
        css: { display: 'none' },
      })
    } else if (
      state.clicked === true ||
      (state.clicked === true && state.initial === null)
    ) {
      // open menu
      gsap.to(menu, {
        duration: 0,
        css: { display: 'block' },
      })
      gsap.to([revealMenuBackground, revealMenu], {
        duration: 0,
        opacity: 1,
        height: '100%',
      })
      staggerReveal(revealMenuBackground, revealMenu)
      staggerText(line1, line2, line3)
    }
  }, [state])

  const staggerReveal = (node1, node2) => {
    gsap.from([node1, node2], {
      duration: 0.8,
      height: 0,
      transformOrigin: 'right top',
      skewY: 2,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.1,
      },
    })
  }

  const staggerText = (node1, node2, node3) => {
    gsap.from([node1, node2, node3], {
      duration: 0.8,
      y: 100,
      delay: 0.1,
      ease: 'power3.inOut',
      stagger: {
        amount: 0.3,
      },
    })
  }

  const handleHover = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: 3,
      skewX: 4,
      ease: 'power3.inOut',
    })
  }
  const handleHoverExit = (e) => {
    gsap.to(e.target, {
      duration: 0.3,
      y: -3,
      skewX: 0,
      ease: 'power3.inOut',
    })
  }

  // Toggle menu
  const handleMenu = () => {
    if (state.clicked === true) {
      setState({
        clicked: !state.clicked,
        menuName: (
          <FontAwesomeIcon className='header-hamburger-bars' icon={faBars} />
        ),
      })
    } else if (state.clicked === false) {
      setState({
        clicked: !state.clicked,
        menuName: <FontAwesomeIcon icon={faTimes} />,
      })
    }
  }

  return (
    <div ref={(el) => (menu = el)} className='hamburger-menu'>
      <div
        ref={(el) => (revealMenuBackground = el)}
        className='menu-secondary-background-color'
      ></div>
      <div ref={(el) => (revealMenu = el)} className='menu-layer'>
        <div className='container'>
          <div className='wrapper'>
            <div className='menu-links'>
              <nav>
                <ul>
                  <li ref={(el) => (line1 = el)}>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      to='aboutMe'
                      smooth={true}
                      delay={1000}
                      duration={1000}
                      onClick={handleMenu}
                    >
                      AboutMe
                    </Link>
                  </li>
                  <li ref={(el) => (line2 = el)}>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      to='resume'
                      smooth={true}
                      delay={1000}
                      duration={1000}
                      onClick={handleMenu}
                    >
                      Resume
                    </Link>
                  </li>
                  <li ref={(el) => (line3 = el)}>
                    <Link
                      onMouseEnter={(e) => handleHover(e)}
                      onMouseOut={(e) => handleHoverExit(e)}
                      to='contactMe'
                      smooth={true}
                      delay={1000}
                      duration={1000}
                      onClick={handleMenu}
                    >
                      ContactMe
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
