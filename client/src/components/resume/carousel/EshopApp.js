import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

import shop1 from '../../../assets/resume/mobile-projects/e-shop/shop1.png'
import shop2 from '../../../assets/resume/mobile-projects/e-shop/shop2.png'
import shop3 from '../../../assets/resume/mobile-projects/e-shop/shop3.png'

SwiperCore.use([Navigation, Pagination, Autoplay])

const EshopApp = () => {
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
            <img src={shop1} alt='project' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={shop2} alt='project' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={shop3} alt='project' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default EshopApp
