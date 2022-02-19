import { useState, useLayoutEffect } from 'react';

// ↓ react官方规定自定义的hook需要以use开头
//    区别于原生hook，自定义hook以Hook结尾
export default function useTitleHook(title) {
  const [state, setState] = useState();
  useLayoutEffect(()=>{
    document.title = title;
    setState(title);
  }, [title])
  return state;
}
