import React, { useState, useEffect } from 'react';

export default function(props){
  const [state, setState] = useState()

  useEffect(() => {

  }, [])

  return (
    <div className="commeent">
      <h1 className="comment-title">评论</h1>
      <div className="comment-lists">
        <div className="comment-lists_item">
          <img alt="user" className="avatar" src={"http://img3.mukewang.com/szimg/5d1032ab08719e0906000338-360-202.jpg"}/>
          <div className="right">
            <div className="right-top">
              <p>{"user"}</p>
              <p>{"time"}</p>
            </div>
            <div className="right-bottom">
              {"info"}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}