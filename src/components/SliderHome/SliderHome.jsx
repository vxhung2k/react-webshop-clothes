import React from 'react'
import { BiCart } from 'react-icons/bi'
import { Link } from 'react-router-dom'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";



import './SliderHome.css'
import data from '../../assets/fake-data/hero-slider'


const SliderHome = (props) => {



    return (
        <div className='container slider__home'>
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="mySwiper"
            >
                {data.map((item, index) => {
                    return (
                        <SwiperSlide>
                            <div className="slider__home__item" key={index}>
                                <div className="slider__home__item__left">
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                    <Link to={item.path} className='slider__button '>
                                        <button className='button1 '>Xem chi tiết</button>
                                        
                                    </Link>
                                </div>


                                <div className="element abc"></div>
                                <div className="slider__home__item__right">
                                    <img src={item.img} className='rotate' alt={item.title} />
                                </div>



                            </div>
                        </SwiperSlide>
                    )
                })}


            </Swiper>

        </div>

    )
}



export default SliderHome