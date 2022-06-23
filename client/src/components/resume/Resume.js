import React, { useState, useEffect, useReducer } from 'react'
import { Modal } from 'react-bootstrap'

import './Resume.css'
import ScreenHeading from '../../utilities/screenHeading/ScreenHeading'

import ModalForProjects from './modals/ModalForProjects'
import CustomCarousel from './carousel/CustomCarousel'
import AlavaComputers from './carousel/AlavaComputers'
import OpelStore from './carousel/OpelStore'
import EshopApp from './carousel/EshopApp'
import PlacesApp from './carousel/PlacesApp'
import ExpensesApp from './carousel/ExpensesApp'

import { gsap } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const BLOCK = 'BLOCK'
const SEE_AVAILABILITY = 'SEE_AVAILABILITY'
const PROJECT3 = 'PROJECT3'
const MOBILEPROJECT1 = 'MOBILEPROJECT1'
const MOBILEPROJECT2 = 'MOBILEPROJECT2'
const MOBILEPROJECT3 = 'MOBILEPROJECT3'
const CLOSE = 'CLOSE'

const modalReducer = (state, action) => {
  switch (action.type) {
    case BLOCK:
      return {
        // heading: 'Heading 1',
        content: <CustomCarousel />,
        confirmButtonText: 'Block',
        confirmButtonAction: () => console.log('User blocked'),
        show: true,
      }
    case SEE_AVAILABILITY:
      return {
        // heading: 'Heading 2',
        content: <AlavaComputers />,
        confirmButtonText: 'Request Session',
        confirmButtonAction: () => console.log('Session(s) requested.'),
        show: true,
      }
    case PROJECT3:
      return {
        // heading: 'Heading 3',
        content: <OpelStore />,
        confirmButtonText: 'Block3',
        confirmButtonAction: () => console.log('User blocked'),
        show: true,
      }

    case MOBILEPROJECT1:
      return {
        content: <EshopApp />,
        show: true,
      }
    case MOBILEPROJECT2:
      return {
        content: <PlacesApp />,
        show: true,
      }
    case MOBILEPROJECT3:
      return {
        content: <ExpensesApp />,
        show: true,
      }
    case CLOSE:
      return {
        heading: '',
        content: '',
        confirmButtonText: '',
        confirmButtonAction: '',
        show: false,
      }
  }
}

const Resume = () => {
  const [showConfirmCallToAction, setshowConfirmCallToAction] = useState(true)

  const [modalState, modalDispatch] = useReducer(modalReducer, {
    heading: '',
    content: '',
    confirmButtonText: '',
    confirmButtonAction: '',
    show: false,
  })

  const dispatchModalAction = (action) => {
    modalDispatch({
      type: action,
    })
  }

  const closeModalHandler = () => {
    modalDispatch({
      type: CLOSE,
    })
  }

  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0)
  const [carouselOffSetStyle, setCarouselOffSetStyle] = useState({})

  const ResumeHeading = ({
    heading,
    fromDate,
    toDate,
    subHeading,
    description,
    viewProject,
    viewProjectTwo,
    viewProjectThree,
    viewMobileProject1,
    viewMobileProject2,
    viewMobileProject3,
  }) => {
    return (
      <>
        <div className='resume-heading'>
          <div className='resume-main-heading'>
            <div className='heading-bullet'></div>
            <span>{heading ? heading : ''}</span>
            {fromDate && toDate ? (
              <div className='heading-date'>{fromDate + '-' + toDate}</div>
            ) : fromDate ? (
              <div className='heading-date'>{fromDate}</div>
            ) : (
              <div></div>
            )}
          </div>

          <div className='resume-sub-heading'>
            <span>{subHeading ? subHeading : ''}</span>
          </div>
          <div className='resume-heading-description'>
            <span>{description ? description : ''}</span>
          </div>
          <div>
            {viewProject ? (
              <div className='view-project' style={{ marginTop: 5 }}>
                <button onClick={() => dispatchModalAction(BLOCK)}>
                  {viewProject ? viewProject : ''}
                </button>
              </div>
            ) : viewProjectTwo ? (
              <div className='view-project' style={{ marginTop: 5 }}>
                <button onClick={() => dispatchModalAction(SEE_AVAILABILITY)}>
                  {viewProjectTwo ? viewProjectTwo : ''}
                </button>
              </div>
            ) : viewProjectThree ? (
              <div className='view-project' style={{ marginTop: 5 }}>
                <button onClick={() => dispatchModalAction(PROJECT3)}>
                  {viewProjectThree ? viewProjectThree : ''}
                </button>
              </div>
            ) : viewMobileProject1 ? (
              <div className='view-project' style={{ marginTop: 5 }}>
                <button onClick={() => dispatchModalAction(MOBILEPROJECT1)}>
                  {viewMobileProject1 ? viewMobileProject1 : ''}
                </button>
              </div>
            ) : viewMobileProject2 ? (
              <div className='view-project' style={{ marginTop: 5 }}>
                <button onClick={() => dispatchModalAction(MOBILEPROJECT2)}>
                  {viewMobileProject2 ? viewMobileProject2 : ''}
                </button>
              </div>
            ) : viewMobileProject3 ? (
              <div className='view-project' style={{ marginTop: 5 }}>
                <button onClick={() => dispatchModalAction(MOBILEPROJECT3)}>
                  {viewMobileProject3 ? viewMobileProject3 : ''}
                </button>
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <ModalForProjects
          showConfirmCallToAction={showConfirmCallToAction}
          show={modalState.show}
          close={closeModalHandler}
          confirmButtonText={modalState.confirmButtonText}
          confirmButtonAction={modalState.confirmButtonAction}
        >
          <Modal.Body>
            <>{modalState.content}</>
          </Modal.Body>
        </ModalForProjects>
      </>
    )
  }

  const resumeBullets = [
    // { label: 'Education', logoSrc: 'education.svg' },
    // { label: 'Work History', logoSrc: 'work-history.svg' },
    { label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
    { label: 'Web Projects', logoSrc: 'web-projects.svg' },
    { label: 'Mobile Projects', logoSrc: 'mobile-projects.svg' },
  ]

  const programmingSkillsDetails = [
    { skill: 'JavaScript', ratingPercentage: 85 },
    { skill: 'React JS', ratingPercentage: 85 },
    { skill: 'Flutter', ratingPercentage: 85 },
    { skill: 'Express JS', ratingPercentage: 89 },
    { skill: 'Node JS', ratingPercentage: 89 },
    { skill: 'Mongo Db', ratingPercentage: 70 },
    { skill: 'Python', ratingPercentage: 70 },
    { skill: 'HTML', ratingPercentage: 80 },
    { skill: 'CSS', ratingPercentage: 80 },
  ]

  const projectsDetails = [
    {
      title: 'Personal Portfolio',
      duration: { fromDate: '2022' },
      view: 'View Project',
      description:
        'A Personal Portfolio website to showcase all my details and projects at one place.',
      subHeading: 'Technologies Used: React JS, Express, Node Js',
    },
    {
      title: 'Alava Computers',
      duration: { fromDate: '2022' },
      viewTwo: 'View Project',

      description:
        'An ecommerce designed to sell products online and show technical service',
      subHeading:
        'Technologies Used:  React, Mongo DB, Express Js, Node Js, Redux.',
    },
    {
      title: 'Opel Store ',
      duration: { fromDate: '2021' },
      viewThree: 'View Project',

      description:
        'Online ecommerce website for showcasing and selling products onlne with payment system integration.',
      subHeading: 'Technologies Used: Wordpress, Woocommerce.',
    },
  ]

  const mobileProjectsDetails = [
    {
      title: 'Mobile E-shop',
      duration: { fromDate: '2021' },
      viewForMobile: 'View Project',
      description: 'An ecommerce app designed to sell products.',
      subHeading: 'Technologies Used: Flutter, Mongo DB, Express, Node Js',
      // to: { link: 'Home' },
    },
    {
      title: 'Places App',
      duration: { fromDate: '2021' },
      viewForMobile2: 'View Project',

      description:
        'An app to save places showing the map and taking picture (camera, map, location)',
      subHeading: 'Technologies Used: Flutter, Google maps, Firebase.',
    },
    {
      title: 'Personal Expenses App',
      duration: { fromDate: '2021' },
      viewForMobile3: 'View Project',

      description: 'An app to track expenses.',
      subHeading: 'Technologies Used: Flutter, Firebase.',
      // to: { link: 'Home' },
    },
  ]

  const resumeDetails = [
    /* PROGRAMMING SKILLS */
    <div
      className='resume-screen-container programming-skills-container'
      key='programming-skills'
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className='skill-parent' key={index}>
          <div className='heading-bullet'></div>
          <span>{skill.skill}</span>
          <div className='skill-percentage'>
            <div
              style={{ width: skill.ratingPercentage + '%' }}
              className='active-percentage-bar'
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* WEB PROJECTS */
    <div className='resume-screen-container' key='projects'>
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          viewProject={projectsDetails.view}
          viewProjectTwo={projectsDetails.viewTwo}
          viewProjectThree={projectsDetails.viewThree}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
        />
      ))}
    </div>,

    /* MOBILE PROJECTS */
    <div className='resume-screen-container' key='mobileProjects'>
      {mobileProjectsDetails.map((mobileProjectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={mobileProjectsDetails.title}
          viewMobileProject1={mobileProjectsDetails.viewForMobile}
          viewMobileProject2={mobileProjectsDetails.viewForMobile2}
          viewMobileProject3={mobileProjectsDetails.viewForMobile3}
          subHeading={mobileProjectsDetails.subHeading}
          description={mobileProjectsDetails.description}
          fromDate={mobileProjectsDetails.duration.fromDate}
        />
      ))}
    </div>,
  ]

  const handlerCarousel = (index) => {
    let offsetHeight = 650
    let newCarouselOffset = {
      style: { transform: 'translateY(' + index * offsetHeight * -1 + 'px)' },
    }
    setCarouselOffSetStyle(newCarouselOffset)
    setSelectedBulletIndex(index)
  }

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handlerCarousel(index)}
        className={
          index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'
        }
        key={index}
      >
        <img
          className='bullet-logo'
          src={require(`../../assets/resume/${bullet.logoSrc}`)}
          alt='B'
        />
        <span className='bullet-label'>{bullet.label}</span>
      </div>
    ))
  }

  const getResumeScreens = () => {
    return (
      <div
        style={carouselOffSetStyle.style}
        className='resume-details-carousel'
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    )
  }

  useEffect(() => {
    gsap.to('.anim', {
      xPercent: -30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.anim',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })

    gsap.to('.anim2', {
      xPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: '.anim2',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    })
  }, [])

  return (
    <div className='resume-container' id='resume'>
      <ScreenHeading title={'Resume'} subHeading={'Some Projects'} />

      <div className='resume-content'>
        <div className='resume-card'>
          <div className='resume-bullets'>
            <div className='bullet-container'>
              <div className='bullet-icons'></div>
              <div className='bullets'>{getBullets()}</div>
            </div>
          </div>
          <div className='resume-bullet-details'>{getResumeScreens()}</div>
        </div>
      </div>

      <div className='features-keyword-container'>
        <div className='features-keyword line'>
          <h1 className='anim'>
            — Digital Identity — Application — Web Site — Webflow — Software
            Development — Commercial Mailing — Ecommerce
          </h1>
        </div>

        <div className='features-keyword line features-keyword-position'>
          <h1 className='anim2'>
            — Ecommerce — Commercial Mailing — Software Development — Webflow —
            Web Site — Application — Digital Identity
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Resume
