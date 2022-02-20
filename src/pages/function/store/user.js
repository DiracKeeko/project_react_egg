import React, { useState, useEffect } from 'react';
import { useStoreHook, useStateHook, useDispatchHook } from 'think-react-store';

export default function(props) {
  const [state, setState] = useState();
  const {
    user: { id, username, getUserAsync },
  } = useStoreHook();

  // const states = useStateHook();
  // console.log("states->", states); // 返回的是全局的状态值
  const userStates = useStateHook('user'); // 传参"user"，类似于指定命名空间
  // console.log("userStates->", userStates); // 返回的是用户的状态值

  useEffect(() => {
    getUserAsync({
      id: 1,
      username: 'John',
    });
  }, [getUserAsync]);

  // const handleClick = () => {
  //   getUserAsync({
  //     id: 2,
  //     username: "Mike"
  //   })
  // }

  // ↓ 用dispatchHook来实现和上面一样的效果
  const oneDispatch = useDispatchHook();
  const handleClick = () => {
    oneDispatch({
      key: 'user',
      type: 'getUserAsync',
      payload: {
        id: 2,
        username: 'Mike',
      },
    });
  };

  // ↓ 传入key 调用同步方法，测试可以
  // const oneDispatch = useDispatchHook('user');
  // const handleClick = () => {
  //   oneDispatch({
  //     type: 'getUser',
  //     payload: {
  //       id: 2,
  //       username: 'Mike',
  //     },
  //   });
  // };

  // ↓ 官方文档里有这样的用法，但测试这种写法不行 
  // const oneDispatch = useDispatchHook('user');
  // const handleClick = () => {
  //   oneDispatch(() => ({
  //     type: 'getUserAsync',
  //     payload: {
  //       id: 2,
  //       username: 'Mike',
  //     },
  //   }));
  // };

  return (
    <div>
      user-id: {id}
      <br />
      user name: {username}
      <br />
      <button onClick={handleClick}>修改</button>
    </div>
  );
}
