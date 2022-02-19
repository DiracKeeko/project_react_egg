import React, { useReducer } from 'react';

const initState = {
  isLogin: false,
  user: {
    id: '1',
    name: 'John',
  },
};


const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLogin: action.payload,
      };
    default:
      break;
  }
};

const UserContext = React.createContext();

const UserContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initState);
  // ↑ userReducer的返回值是一个数组，
  // 数组第一项是state表示状态;数组第二项是一个dispatch方法，用来派发事件。
  return (
    <UserContext.Provider value={{state, dispatch}}>
      {props.children}
    </UserContext.Provider>
  );
};

export {
  UserContext,
  UserContextProvider
}