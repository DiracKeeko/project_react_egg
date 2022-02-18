import React, { useState, useEffect, useLayoutEffect, useMemo, useCallback } from 'react';
// ↑ 在function组件中使用useState方法设置变量和更改变量

export default function(props) {
  // const [state, setState] = useState()
  // useState(argument) argument是非必填项，如果不填。默认state值为undefined

  const [count, setCount] = useState(0);
  const [text, setText] = useState("test demo");

  // useEffect(func, array), array是非必选项
  // ↓ 类似于componentDidMount, componentWillUnmount生命周期
  // useEffect(() => {}, []) // []表示依赖项

  /* 
  useEffect(() => {
    console.log('useEffect');
    // 初次加载会打印，之后每次count数据变更都会打印
  }); 
  */

  /*
  useEffect(() => {
    console.log('useEffect');
    // 初次加载会打印，之后每次count数据变更，不会打印
  }, []);
  */

  /* 
  useEffect(() => {
    console.log('useEffect');
    // 初次加载会打印，之后每次count数据变更都会打印
    // ↓ 依赖项count发生变更，useEffect会执行
  }, [count]); 
  */

  // ↓ useEffect中可以执行异步函数
  /* 
  useEffect(() => {
    console.log('useEffect');
    let res;
    fetch('/api/getLists')
      .then(response => response.json())
      .then(data => {
        res = data;
        console.log('res in callback->', res);
      });
    console.log('res outside ->', res);

  }, [count]); 
  */
  // ↑ 控制台依次输出
  /* 
    useEffect
    res outside -> undefined
    res in callback-> {lists: Array(3)}
  */

  // useEffect的第一个参数不能使用async
  // ↓ 这样写会报错
  // useEffect(async() => {
  //   console.log('useEffect');
  // }, [count]);

  // 想要使用async 有两种写法
  // 1、把async写在回调函数内
  useEffect(() => {

    console.log('useEffect');
    async function demo() {
      console.log("demo 01");
      // const res = await fetch('/api/getLists');
      // console.log("res->", res);
    }
    demo(); // 虽然能够执行，但fetch依然是异步的。
    console.log("01");

  }, [count]);
  // ↑ 控制台依次输出
  /* 
    useEffect
    demo 01
    demo
  */

  // 2、把async函数写在useEffect同级
  async function demo02() {
    console.log("demo 02");
  }
  useEffect(() => {

    console.log('useEffect');
    
    demo02();
    console.log("02");

  }, [count]);
  // ↑ 控制台依次输出
  /* 
    useEffect
    demo 01
    demo
  */
  // useEffect说明 useEffect可以存在多个

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  })

  // useLayoutEffect先于所有的useEffect打印
  // 1、一般在项目中在useEffect中做异步操作
  // 2、在useLayoutEffect中操作dom对象或改变浏览器的显示效果

  /* 
  const handleCount = () => {
    setCount(count + 1);
    // setCount(count++); // ← 不能这样写，报错"count" is read-only
  }; 
  */

  const noCacheText = () => {
    console.log("text changed"); 
    return text;
  }

  const memoText = useMemo(() => {
    console.log("useMemo text changed");
    return text;
  }, [text])
  // ↑ 如果依赖项text没发生改变，视图发生改变，memoText不会改变。
  // useMemo用来做性能的优化，返回的是一个经过缓存的值

  const handleCount = useCallback(() => {
    console.log("count changed");;
    setCount(count + 1);
  }, [count])

  return (
    <div>
      <h1 onClick={handleCount}>count: {count}</h1>
      {/* <h1>text: {noCacheText()}</h1> */}
      <h1>text: {memoText}</h1>

    </div>
  );
}
