import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../assets/Andrew.png'
import AVTR2 from '../../assets/Latimer.png'
import AVTR3 from '../../assets/mrcook.png'
import AVTR4 from '../../assets/JetEngine.avif'


import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Andrew Mainella',
    review: 'Tianze is truly inspirational; having learned to code at a very young age, being remarkably intelligent and he is frequently the centre of attention. He consistently excels in everything he touches, be it in football or the Waterloo coding contests where he has demonstrated a remarkable prowess. Surely, there are more achievements to come with his leadership and coding experience!'
  },
  {
    avatar: AVTR2,
    name: 'Mrs. Karen Latimer',
    review: 'Tianze excels in coding and problem-solving, consistently showcasing a deep understanding of algorithms and data structures. Their ability to tackle complex problems with ingenuity and efficiency sets them apart.'
  },
  {
    avatar: AVTR3,
    name: 'Mr. Jared Cook',
    review: 'In AP Physics, Tianze has shown himself to be a critical thinker with strong mathematical skills and conceptual understanding.'
  },
]

const Testimonials = () => {
  return (
    <section id='Testimonials'>
      <h5>What others know about me</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonials'>
                <div className='client__avatar'>
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials