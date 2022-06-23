import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

import expenses1 from '../../../assets/resume/mobile-projects/expenses/expenses1.png'
import expenses2 from '../../../assets/resume/mobile-projects/expenses/expenses2.png'
import expenses3 from '../../../assets/resume/mobile-projects/expenses/expenses3.png'

SwiperCore.use([Navigation, Pagination, Autoplay])

const ExpensesApp = () => {
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
            <img src={expenses1} alt='project' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={expenses2} alt='project' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={expenses3} alt='project' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default ExpensesApp
