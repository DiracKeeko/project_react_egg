import React, { useState, useEffect } from 'react';
import { useTitleHook, useHttpHook } from "@/hooks";

export default function(props){
  const [state, setState] = useState('customize');
  const title = useTitleHook(state);

  useEffect(() => {

  }, [])

  const [listResult, loading] = useHttpHook({
    url: "/getListsAsync",
    method: "GET",
    watch: [state] // ← 监听state的变化，如果state发生变化，则执行useHttpHook
  });
  // console.log("listResult->", listResult);
  // console.log("loading->", loading);

  const handleClick = () => {
    setState("customize changed");
  }
  return (
    <div>
      <h1 onClick={handleClick}>{title}</h1>
    </div>
  )
}