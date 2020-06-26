import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import fs1 from '../../../resource/fs1.png'
import fs2 from '../../../resource/fs2.png'
import fs3 from '../../../resource/fs3.png'
import fs4 from '../../../resource/fs4.png'

function FintechScraping() {

    var settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false
    };

    return (
        <div className="Project">

            <span className="title">Fintech Scraping</span>

            <Slider {...settings}>
                <div>
                    <img style={{ marginLeft: 0 }} src={fs1} alt="CloudLogo"  />
                </div>
                <div>
                    <img style={{ marginLeft: 0 }} src={fs2} alt="CloudLogo"  />
                </div>
                <div>
                    <img style={{ marginLeft: 0 }} src={fs3} alt="CloudLogo"  />
                </div>
                <div>
                    <img style={{ marginLeft: 0 }} src={fs4} alt="CloudLogo"  />
                </div>


            </Slider>

            <span className="lable" style={{marginBottom:5}}>Ref:</span>
            <a href={"https://fintech-scraping.web.app/"} target="_blank" rel="noopener noreferrer">Live Site</a>

        </div>
    )
}

export default FintechScraping
