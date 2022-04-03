import React, { useState, useEffect } from 'react';
import AwesomeSwiper from "react-awesome-swiper";

export default function(props){
  const [config, setConfig] = useState({
    loop: true,
    autoplay: {
      delay: 1500
    },
    pagination: {
      el: ".swiper-pagination", //dom节点
    }
  })

  useEffect(() => {

  }, [])

  return (
    <AwesomeSwiper className="banner" config={config}>
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img alt="banner" src={""}></img>
        </div>
        <div className="swiper-slide">
          <img alt="banner" src={""}></img>
        </div>
        <div className="swiper-slide">
          <img alt="banner" src={""}></img>
        </div>
      </div>
      <div className="swiper-pagination"></div>
    </AwesomeSwiper>
  )
}