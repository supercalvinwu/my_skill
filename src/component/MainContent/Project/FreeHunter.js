import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import fh1 from '../../../resource/fh1.png'
import fh2 from '../../../resource/fh2.png'
import fh3 from '../../../resource/fh3.png'
import fh4 from '../../../resource/fh4.png'
import fh5 from '../../../resource/fh5.png'

function FreeHunter() {
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
            <span className="title">Free Hunter</span>

            
                <Slider {...settings}>
                    <div>
                        <img style={{ marginLeft: 0 }} src={fh1} alt="CloudLogo" />
                    </div>
                    <div>
                        <img style={{ marginLeft: 0 }} src={fh2} alt="CloudLogo" />
                    </div>
                    <div>
                        <img style={{ marginLeft: 0 }} src={fh3} alt="CloudLogo" />
                    </div>
                    <div>
                        <img style={{ marginLeft: 0 }} src={fh4} alt="CloudLogo" />
                    </div>
                    <div>
                        <img style={{ marginLeft: 0 }} src={fh5} alt="CloudLogo" />
                    </div>
                </Slider>
            
            <span className="lable" style={{ marginBottom: 5 }}>Ref:</span>
            <a href={"https://freehunter.hk/"} target="_blank" rel="noopener noreferrer">Live Site</a>

        </div>
    )
}

export default FreeHunter
