import React, { Component } from 'react';

// ErrorBoundary是父组件监听子组件内的错误。不能监听自身发生的错误
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
  }

  static getDerivedStateFromError(error) {
    console.log("error in getDerivedStateFromError->", error);
    return {
      flag: true
    };
  }

  /* error: 抛出的错误
   * info: 带有 componentStack key 的对象，其中包含有关组件引发错误的栈信息
   * ↓ 在这个生命周期里做日志相关操作
   */
  componentDidCatch(error, info) {}

  render() {
    return <div>{this.state.flag ? <h1>发生错误，请稍后再试</h1> : this.props.children}</div>;
  }
}
