import React, { Component, createRef } from 'react';

export default class Refs extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.domRef = createRef();
  }

  componentDidMount() {
    console.log("domRef->", this.domRef); 
    // ↑ 打印出来的结果this.domRef.current 就是h1节点
    console.log("innerHTML->", this.domRef.current.innerHTML);

    // 如果没有在标签上写ref属性，在componentDidMount里打印结果 { current: null }
    // 疑问： createRef在什么时候执行？
  }

  render() {
    return (
      <div>
        <h1 ref={this.domRef}>refs text</h1>
        {/* <h1>refs text</h1> */}
      </div>
    )
  }
}