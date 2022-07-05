import React from 'react'
import home from './home.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import logo from '../../components/navbar/images/logo.png'
import "swiper/css/bundle";
import "swiper/css/navigation";


export default function Home(){
  const data= [ 
    {image: logo},
    {image: logo},
    {image: logo},
    {image: logo},
    {image: logo},
    {image: logo},
    {image: logo}
  ]

  return (<>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper" spaceBetween={20} centeredSlides={true}>
        {data.map(user => (
            <SwiperSlide><div className='photos'><img src={user.image} width='400px'/></div></SwiperSlide>
        ))}
      </Swiper>
      <div className='home-container'>
    </div>
  </>
  )
    
}