import React from 'react'
import Slider from "react-slick";
import Banner1 from '../assets/banner1.jpg'
import Banner2 from '../assets/banner2.jpg'
import Banner3 from '../assets/banner3.jpg'
import Banner4 from '../assets/banner4.jpg'
import Banner5 from '../assets/banner5.jpg'
import Banner6 from '../assets/banner6.jpg'


const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <img src={Banner1} alt="" />
                </div>
                <div>
                    <img src={Banner2} alt="" />
                </div>
                <div>
                    <img src={Banner3} alt="" />
                </div>
                <div>
                    <img src={Banner4} alt="" />
                </div>
                <div>
                    <img src={Banner5} alt="" />
                </div>
                <div>
                    <img src={Banner6} alt="" />
                </div>
            </Slider>
        </div>


    )
}

export default Banner
