import React, { useState, useEffect } from 'react';

export default function(props){
  const [houses, setHouses] = useState([
    {
      id: 1,
      img: '/image/01.jpg',
      title: '东城民宿',
      info: '东城区交通方便',
      price: '100'
    },
    {
      id: 2,
      img: '/image/02.png',
      title: '西城民宿',
      info: '西城区山水怡情',
      price: '120'
    },
    {
      id: 3,
      img: '/image/03.jpg',
      title: '新区民宿',
      info: '新区民宿位置优越',
      price: '200'
    },
    {
      id: 4,
      img: '/image/04.jpg',
      title: '老城民宿',
      info: '老城区风景秀美',
      price: '220'
    }
  ])

  useEffect(() => {

  }, [])

  return (
    <div cclassName="hot">
      <h1>最热民宿</h1>
      <div className="hot-lists">
        {houses.map((item => (
          <div className="hot-lists-item" key={item.id}>
            <img className="img" alt="img" src={item.img} />
            <div className="title">{item.title}</div>
            <div className="info">{item.info}</div>
            <div className="price">￥{item.price}</div>
          </div>
        )))}
      </div>
    </div>
  )
}