import React, { useState, useEffect } from 'react';
import { history } from "umi";
import { useObserverHook } from "@/hooks";

// let sectionObserver;
export default function (props) {
  const [state, setState] = useState();

  useObserverHook("#loading", (entries) => {
    console.log("entries->", entries);
  });
  const handleClick = () => {
    history.push("/");
  }

  // useEffect(() => {
  //   console.log("进入页面");
  //   sectionObserver = new IntersectionObserver((e) => {
  //     console.log(e);
  //   });
  //   const element = document.querySelector("#loading");
  //   sectionObserver.observe(element);

  //   // ↓ 在离开页面的时候触发
  //   return () => {
  //     console.log("离开页面");
  //     if (sectionObserver) {
  //       // 停止观察指定元素
  //       sectionObserver.unobserve(element);

  //       // 停止监听
  //       sectionObserver.disconnect();
  //     }
  //   }
  // }, []);

  return (
    <div>
      <button onClick={handleClick}>首页</button>
      observer
      <div
        id="loading"
        style={{ width: '100px', height: '100px', background: '#fea', marginTop: '1000px'}}
      >
        loading
      </div>
    </div>
  );
}
