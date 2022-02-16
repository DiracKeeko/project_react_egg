import React, { useState, useEffect } from 'react';
// ↑ 在function组件中使用useState方法设置变量和更改变量

export default function(props){
  // const [state, setState] = useState() 
  // useState(argument) argument是非必填项，如果不填。默认state值为undefined

  const [count, setCount] = useState(0);

  useEffect(() => {

  }, [])

  const handleCount = () => {
    setCount(count+1);
    // setCount(count++); // ← 不能这样写，报错"count" is read-only
  }
  return (
    <div>
      <h1 onClick={handleCount}>count: {count}</h1>
    </div>
  )
}