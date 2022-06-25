import React, { useState, useRef } from 'react'

import './ContactMe.css'
import { toast } from 'react-toastify'
import Jumbotron from '../home/jumbotron/Jumbotron'
import load1 from '../../assets/contactMe/load2.gif'
import ScreenHeading from '../../utilities/screenHeading/ScreenHeading'
import Map from '../google-map/Map'
import emailjs from 'emailjs-com'

const ContactMe = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [banner, setBanner] = useState('')
  const [bool, setBool] = useState(false)

  const emailService = process.env.REACT_APP_EMAIL_SERVICE_ID
  const emailTemplate = process.env.REACT_APP_EMAIL_TEMPLATE_ID
  const emailKey = process.env.REACT_APP_EMAIL_PUBLIC_KEY

  const form = useRef()

  const mailController = async () => {
    const response = await emailjs.sendForm(
      emailService,
      emailTemplate,
      form.current,
      emailKey
    )
    const json = JSON.stringify(response)
    // console.log(json)
  }

  const sendEmail = (e) => {
    e.preventDefault()
    try {
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner('Please fill out all fields')
        toast.error('Please fill out all fields')
        setBool(false)
      } else {
        setBool(true)
        mailController().then(() => {
          setBanner('Thank you for contacting me')
          toast.success('Thank you for contacting me')
          setBool(false)
          setName('')
          setEmail('')
          setMessage('')
        })
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  return (
    <>
      <div className='contact-me-container' id='contactMe'>
        <ScreenHeading title={'Contact Me'} subHeading={'Lets Keep In Touch'} />
        <div className='contact-wrapper'>
          <div className='contact-me-form'>
            <h2 className='title'>
              <Jumbotron text={['Get In Touch 📲', 'Send Me an Email 📧']} />
            </h2>
            <form ref={form} onSubmit={sendEmail} action=''>
              <p>{banner}</p>
              <div className='form-group'>
                <input
                  type='text'
                  onChange={handleName}
                  className='form-control'
                  placeholder='NAME'
                  value={name}
                  name='name'
                />
              </div>

              <div className='form-group'>
                <input
                  type='email'
                  onChange={handleEmail}
                  value={email}
                  className='form-control'
                  placeholder='EMAIL'
                  name='email'
                />
              </div>
              <div className='form-group'>
                <textarea
                  className='form-control'
                  onChange={handleMessage}
                  value={message}
                  rows='10'
                  placeholder='MESSAGE'
                  name='message'
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
