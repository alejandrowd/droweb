import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

import places1 from '../../../assets/resume/mobile-projects/places/places1.png'
import places2 from '../../../assets/resume/mobile-projects/places/places2.png'
import places3 from '../../../assets/resume/mobile-projects/places/places3.png'

SwiperCore.use([Navigation, Pagination, Autoplay])

const PlacesApp = () => {
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
            <img src={places1} alt='project' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={places2} alt='project' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={places3} alt='project' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default PlacesApp
