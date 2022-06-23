import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

import portfolio1 from '../../../assets/resume/web-projects/portfolio/portfolio4.png'
import portfolio2 from '../../../assets/resume/web-projects/portfolio/portfolio2.png'
import portfolio3 from '../../../assets/resume/web-projects/portfolio/portfolio3.png'

SwiperCore.use([Navigation, Pagination, Autoplay])

const CustomCarousel = () => {
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
            <img src={portfolio1} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={portfolio2} alt='' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={portfolio3} alt='' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default CustomCarousel
