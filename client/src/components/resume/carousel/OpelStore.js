import React, { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
import 'swiper/swiper-bundle.css'

import opel1 from '../../../assets/resume/web-projects/opel-store/opel1.png'
import opel2 from '../../../assets/resume/web-projects/opel-store/opel2.png'
import opel3 from '../../../assets/resume/web-projects/opel-store/opel3.png'

SwiperCore.use([Navigation, Pagination, Autoplay])

const OpelStore = () => {
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
            <img src={opel1} alt='project' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={opel2} alt='project' />
          </SwiperSlide>
          <SwiperSlide>
            <img src={opel3} alt='project' />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default OpelStore
