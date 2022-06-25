import React, { useEffect } from 'react'
import './Profile.css'
import Jumbotron from '../jumbotron/Jumbotron'
import { Link } from 'react-scroll'
import { gsap, Power3 } from 'gsap'

const Profile = () => {
  const timeline = gsap.timeline({ defaults: { opacity: 0 } })

  useEffect(() => {
    timeline
      .from(
        '.profile-picture',
        { y: 40, ease: Power3.easeOut, duration: 1 },
        'Start'
      )

      .from('.colz-icon', { y: 30, ease: Power3.easeOut, duration: 1 }, 'Start')

      .from(
        '.profile-details-name',
        { y: 30, ease: Power3.easeOut, stagger: 0.3 },
        '+=0.15'
      )

      .from(
        '.skills-details',
        { y: 30, ease: Power3.easeOut, stagger: 0.3 },
        '+=0.15'
      )

      .from(
        '.profile-role-tagline',
        { y: 30, ease: Power3.easeOut, stagger: 0.3 },
        '+=0.15'
      )

      .from(
        '.profile-options',

        { y: 20, ease: Power3.easeOut, duration: 1 },
        '+=0.15'
      )
  }, [timeline])

  return (
    <div className='profile-container'>
      <div className='profile-parent'>
        <div className='profile-details'>
          <div className='colz'>
            <div className='colz-icon'>
              {/* <a href='#'>
                <i className='fa fa-facebook-square'></i>
              </a>
              <a href='#'>
                <i className='fa fa-google-plus-square'></i>
              </a> */}
              <a
                href='https://www.instagram.com/walteralejandroarguello/'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fa fa-instagram'></i>
              </a>
              <a
                href='https://github.com/alejandrowd'
                target='_blank'
                rel='noreferrer'
              >
                <i className='fa fa-github'></i>
              </a>
              {/* <a href='#'>
                <i className='fa fa-twitter'></i>
              </a> */}
            </div>
          </div>
          <div className='profile-details-name'>
            <span className='primary-text'>
              Hello, I'M{' '}
              <span className='highlighted-text'>Walter Arguello</span>
            </span>
          </div>
          <div className='profile-details-role'>
            <span className='primary-text'>
              <h1 className='skills-details'>
                <Jumbotron
                  txtStyle={{ textAlign: 'center' }}
                  text={[
                    'Enthusiastic Dev 😎',
                    'Full Stack Developer 💚',
                    'Software Developer 💻',
                    'Cross Platform Dev 🤗',
                  ]}
                />
              </h1>
              <span className='profile-role-tagline'>
                Knack of building applications with front and backend
                operations.
              </span>
            </span>
          </div>
          <div className='profile-options'>
            <Link
              to='contactMe'
              className='active'
              smooth={true}
              duration={1000}
            >
              <button className='btn primary-btn'>Hire Me</button>
            </Link>
            <a href='WA_cv.pdf' download='Walter_Arguello_cv.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'></div>
        </div>
      </div>
    </div>
  )
}

export default Profile
