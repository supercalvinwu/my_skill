import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import se1 from '../../../resource/se1.png'
import se2 from '../../../resource/se2.png'
import se3 from '../../../resource/se3.png'
import se4 from '../../../resource/se4.png'

function SmartEat() {

    var settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="Project">
            <span className="title">Smart Eat</span>

            <Slider {...settings}>
                <div>
                    <img style={{ marginLeft: 0 }} src={se1} alt="CloudLogo" width={450} height={450} />
                </div>
                <div>
                    <img style={{ marginLeft: 0 }} src={se2} alt="CloudLogo" width={450} height={450} />
                </div>
                <div>
                    <img style={{ marginLeft: 0 }} src={se3} alt="CloudLogo" width={450} height={450} />
                </div>
                <div>
                    <img style={{ marginLeft: 0 }} src={se4} alt="CloudLogo" width={450} height={450} />
                </div>
            </Slider>

            <span className="lable" style={{ marginBottom: 5 }}>Ref:</span>
            <a href={"https://www.youtube.com/watch?v=5f4MTvBC4Ww"} target="_blank" rel="noopener noreferrer">Youtube video</a>
            <a href={"https://www.eee.hku.hk/news/hkueee-student-team-got-the-silver-award-in-the-47th-international-exhibition-of-inventions-geneva/"} target="_blank" rel="noopener noreferrer">HKU News HKUEEE student team got the Silver Award in the 47th International Exhibition of Inventions Geneva</a>
            <a href={"https://www.hk01.com/%E8%A6%AA%E5%AD%90/317572/%E6%B8%AF%E5%B0%8F%E5%AD%B8%E7%94%9F%E9%A6%96%E6%88%B0%E6%97%A5%E5%85%A7%E7%93%A6%E5%9C%8B%E9%9A%9B%E7%99%BC%E6%98%8E%E5%B1%95-%E6%86%91%E5%8D%88%E8%86%B3%E7%87%9F%E9%A4%8A%E8%A8%98%E9%8C%84app%E5%A5%AA%E9%8A%80%E7%8D%8E"} target="_blank" rel="noopener noreferrer">HK01 News 港小學生首戰日內瓦國際發明展　憑午膳營養記錄APP奪銀獎</a>
            <a href={"https://news.mingpao.com/pns/%E6%B8%AF%E8%81%9E/article/20190413/s00002/1555093692490/%E8%A3%BDapp%E5%8A%A9%E8%BF%BD%E8%B9%A4%E5%AD%B8%E7%AB%A5%E7%87%9F%E9%A4%8A%E6%94%9D%E5%8F%96-%E6%B8%AF%E5%B0%8F%E5%AD%B8%E7%94%9F%E9%A6%96%E6%88%B0%E6%97%A5%E5%85%A7%E7%93%A6%E7%99%BC%E6%98%8E%E5%B1%95"} target="_blank" rel="noopener noreferrer">明報 News 製App助追蹤學童營養攝取 港小學生首戰日內瓦發明展</a>
        </div>
    )
}

export default SmartEat
