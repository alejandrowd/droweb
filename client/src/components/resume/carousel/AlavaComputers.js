import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

import alava1 from '../../../assets/resume/web-projects/alava-comp/alava1.png'
import alava2 from '../../../assets/resume/web-projects/alava-comp/alava2.png'
import alava3 from '../../../assets/resume/web-projects/alava-comp/alava3.png'

SwiperCore.use([Navigation, Pagination, Autoplay])

const AlavaComputers = () => {
  const swiperRef = useRef(null)
  return (
    <div className='section-with-carousel'>
      <div
        onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
        onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
      >
        <Swiper
          ref={swiperRef}
          autoplay={{ delay: 5000 }}
          speed={1300}
          allowTouchMove={true}
          pagination={{ clickable: true }}
          navigation
        >
          <SwiperSlide>
            <img src={alava1} alt='project' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={alava2} alt='project' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={alava3} alt='project' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default AlavaComputers
