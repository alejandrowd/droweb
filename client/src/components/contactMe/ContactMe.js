import React, { useState } from 'react'

import './ContactMe.css'
import axios from 'axios'
import { toast } from 'react-toastify'
import Jumbotron from '../home/jumbotron/Jumbotron'
import load1 from '../../assets/contactMe/load2.gif'
import ScreenHeading from '../../utilities/screenHeading/ScreenHeading'
import Map from '../google-map/Map'

const ContactMe = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [banner, setBanner] = useState('')
  const [bool, setBool] = useState(false)

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const submitForm = async (e) => {
    e.preventDefault()
    try {
      let data = {
        name,
        email,
        message,
      }
      setBool(true)
      const res = await axios.post('/api/contact', data)
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg)
        toast.error(res.data.msg)
        setBool(false)
      } else if (res.status === 200) {
        setBanner(res.data.msg)
        toast.success(res.data.msg)
        setBool(false)
        setName('')
        setEmail('')
        setMessage('')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <div className='contact-me-container' id='contactMe'>
        <ScreenHeading title={'Contact Me'} subHeading={'Lets Keep In Touch'} />
        <div className='contact-wrapper'>
          <div className='contact-me-form'>
            <h2 className='title'>
              <Jumbotron text={['Get In Touch', 'Send Me an Email']} />
            </h2>
            <form onSubmit={submitForm} action=''>
              <p>{banner}</p>
              <div className='form-group'>
                <input
                  type='text'
                  onChange={handleName}
                  className='form-control'
                  placeholder='NAME'
                  value={name}
                />
              </div>

              <div className='form-group'>
                <input
                  type='email'
                  onChange={handleEmail}
                  value={email}
                  className='form-control'
                  placeholder='EMAIL'
                />
              </div>
              <div className='form-group'>
                <textarea
                  className='form-control'
                  onChange={handleMessage}
                  value={message}
                  rows='10'
                  placeholder='MESSAGE'
                ></textarea>
              </div>

              <div className='send-btn'>
                <button type='submit'>
                  send <i className='fa fa-paper-plane' />
                  {bool ? (
                    <b className='load'>
                      <img src={load1} alt='loader' />
                    </b>
                  ) : (
                    ''
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className='map-social-contact-container'>
            <div className='map-wrapper'>
              <div className='map'>
                <Map />
              </div>
            </div>

            {/* <ul className='contact-list'>
              <li className='list-item'>
                <i className='fa fa-map-marker fa-2x'>
                  <span className='contact-text place'>City, State</span>
                </i>
              </li>

              <li className='list-item'>
                <i className='fa fa-phone fa-2x'>
                  <span className='contact-text phone'>
                    <a href='tel:1-212-555-5555' title='Give me a call'>
                      (212) 555-2368
                    </a>
                  </span>
                </i>
              </li>

              <li className='list-item'>
                <i className='fa fa-envelope fa-2x'>
                  <span className='contact-text gmail'>
                    <a href='mailto:#' title='Send me an email'>
                      hitmeup@gmail.com
                    </a>
                  </span>
                </i>
              </li>
            </ul> */}

            <hr />
            <div className='social-media-list'>
              <a
                href='https://github.com/alejandrowd'
                target='_blank'
                rel='noreferrer'
                className='contact-icon'
              >
                <i className='fa fa-github' aria-hidden='true'></i>
              </a>

              {/* <li>
                <a href='#' target='_blank' className='contact-icon'>
                  <i className='fa fa-codepen' aria-hidden='true'></i>
                </a>
              </li>
              <li>
                <a href='#' target='_blank' className='contact-icon'>
                  <i className='fa fa-twitter' aria-hidden='true'></i>
                </a>
              </li> */}

              <a
                href='https://www.instagram.com/walteralejandroarguello/'
                target='_blank'
                rel='noreferrer'
                className='contact-icon'
              >
                <i className='fa fa-instagram' aria-hidden='true'></i>
              </a>
            </div>
            <hr />

            <div className='cv-contact'>
              <a href='WA_cv.pdf' download='Walter_Arguello_cv.pdf'>
                <p>Download CV</p>
              </a>
            </div>
            <div className='copyright'>&copy; ALL OF THE RIGHTS RESERVED</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactMe
