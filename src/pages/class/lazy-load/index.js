import React, { Component, lazy, Suspense } from 'react';
// import Demo from "./demo";
const Demo = lazy(() => import("./demo")); // 返回的是一个promise对象

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    // fallback在组件解析完毕之前执行，可以在组件中加载loading效果
    return (
      <div>
        <Suspense fallback={<div>loading...</div>}>
          <Demo></Demo>
        </Suspense>
      </div>
    )
  }
}