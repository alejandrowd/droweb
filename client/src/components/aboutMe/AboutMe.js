import React, { useEffect, useRef } from 'react'
import './AboutMe.css'
import img3 from '../../assets/aboutMe/dev-illustration.png'
import img4 from '../../assets/aboutMe/moon.png'
import ScreenHeading from '../../utilities/screenHeading/ScreenHeading'
import { Link } from 'react-scroll'
import { gsap, TweenLite, Sine } from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const AboutMe = () => {
  let astro = useRef(null)

  const SCREEN_CONSTANTS = {
    description:
      'Self-motivated person with proven ability and experience in developing applications using full stack and Data Science projects with data structures and algorithms. Dedicated performer who demonstrates innovation, communication and team work to ensure quality, timely project completion.',

    highlights: {
      bullets: [
        'Full Stack development',
        'Build & Release Management CI/CD',
        'GraphQL and REST API',
        'Managing database',
      ],
      heading: 'Here are a Few Highlights:',
    },
  }

  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className='highlight' key={i}>
        <div className='highlight-blob'></div>
        <span>{value}</span>
      </div>
    ))
  }

  const timeline = gsap.timeline()

  useEffect(() => {
    timeline
      .to('.layer-1', {
        duration: 0.7,
        y: '-100vh',
        scrollTrigger: {
          trigger: '.wave-container',
          /*  markers: true, */
          start: 'top 90%',
          end: 'bottom 60%',
          toggleActions: 'restart complete reverse reset',
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
      })
      .to('.layer-2', {
        duration: 0.9,
        y: '-100vh',
        scrollTrigger: {
          trigger: '.wave-container',
          /*  markers: true, */
          start: 'top 70%',
          end: 'bottom 40%',
          toggleActions: 'restart complete reverse reset',
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
      })
      .to('.layer-3', {
        duration: 0.9,
        y: '-100vh',
        scrollTrigger: {
          trigger: '.wave-container',
          /*  markers: true, */
          start: 'top 50%',
          end: 'bottom 20%',
          toggleActions: 'restart complete reverse reset',
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
      })

    gsap.fromTo(
      '.about-me-details',
      { x: '30rem', opacity: 0 },

      {
        x: 0,
        opacity: 1,
        ease: 'back.out(1.7)',
        duration: 1.9,
        scrollTrigger: {
          trigger: '.about-me-container',
          /* markers: true, */
          start: 'top 60%',
          end: 'bottom 100%',
          toggleActions: 'restart complete reverse reset',
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
      }
    )

    gsap.fromTo(
      '.watch-wrapper',
      { x: '30rem', opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: 'back.out(1.7)',
        duration: 2.3,
        scrollTrigger: {
          trigger: '.about-me-container',
          /* markers: true, */
          start: 'top 60%',
          end: 'bottom 100%',
          toggleActions: 'restart complete reverse reset',
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
      }
    )

    gsap.fromTo(
      '.circle-small',
      { x: '-30rem', opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: 'back.out(1.7)',
        duration: 1,
        scrollTrigger: {
          trigger: '.about-me-container',
          /* markers: true, */
          start: 'top 60%',
          end: 'bottom 100%',
          toggleActions: 'restart complete reverse reset',
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
      },
      '+=1.12'
    )
    gsap.fromTo(
      '.circle-large',
      { x: '30rem', opacity: 0 },
      {
        x: 0,
        opacity: 1,
        ease: 'back.out(1.7)',
        duration: 1.5,
        scrollTrigger: {
          trigger: '.about-me-container',
          /* markers: true, */
          start: 'top 60%',
          end: 'bottom 100%',
          toggleActions: 'restart complete reverse reset',
          //options: play, pause, resume, reset, restart, complete, reverse,none
        },
      }
    )
  }, [timeline])

  useEffect(() => {
    const randomX = random(10, 20)
    const randomY = random(20, 30)
    const randomTime = random(3, 5)
    const randomTime2 = random(5, 10)
    const randomAngle = random(8, 12)

    moveX(astro, 1)
    moveY(astro, -1)
    rotate(astro, 1)

    TweenLite.set(astro, {
      x: randomX(-1),
      y: randomX(1),
      rotation: randomAngle(-1),
    })

    function rotate(target, direction) {
      TweenLite.to(target, randomTime2(), {
        rotation: randomAngle(direction),
        // delay: randomDelay(),
        ease: Sine.easeInOut,
        onComplete: rotate,
        onCompleteParams: [target, direction * -1],
      })
    }

    function moveX(target, direction) {
      TweenLite.to(target, randomTime(), {
        x: randomX(direction),
        ease: Sine.easeInOut,
        onComplete: moveX,
        onCompleteParams: [target, direction * -1],
      })
    }

    function moveY(target, direction) {
      TweenLite.to(target, randomTime(), {
        y: randomY(direction),
        ease: Sine.easeInOut,
        onComplete: moveY,
        onCompleteParams: [target, direction * -1],
      })
    }

    function random(min, max) {
      const delta = max - min
      return (direction = 1) => (min + delta * Math.random()) * direction
    }
  }, [])

  return (
    <div className='about-me-container' id='aboutMe'>
      <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'} />
      <div className='circle circle-small'>
        <img src={img4} alt='img' />
      </div>
      <div className='circle circle-large'>
        <img src={img4} alt='img' />
      </div>
      <div className='about-me-parent'>
        <div className='about-me-details'>
          <span className='about-me-description'>
            {SCREEN_CONSTANTS.description}
          </span>
          <div className='about-me-hightlights'>
            <div className='highlight-heading'>
              <span>{SCREEN_CONSTANTS.highlights.heading}</span>
            </div>
            {renderHighlight()}
          </div>
          <div className='about-me-options'>
            {/* <Link
              to='contactMe'
              className='active'
              smooth={true}
              duration={1000}
            >
              <button className='btn primary-btn'>Hire Me</button>
            </Link>
            <a href='WA_cv.pdf' download='Walter_Arguello_cv.pdf'>
              <button className='btn highlighted-btn'>Get Resume</button>
            </a> */}
            <Link
              to='contactMe'
              className='active'
              smooth={true}
              duration={1000}
            >
              <p className='link-to-contact'>Let's make something special</p>
            </Link>
          </div>
        </div>
        <div className='watch-wrapper'>
          <div className='astronaut'>
            <img ref={(el) => (astro = el)} src={img3} alt='' />
          </div>
        </div>
      </div>
      <div className='overlay'>
        <div className='layer layer-1'></div>
        <div className='layer layer-2'></div>
        <div className='layer layer-3'></div>
      </div>
    </div>
  )
}

export default AboutMe
