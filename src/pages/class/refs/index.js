import React, { Component, createRef } from 'react';
import Child from './child';
import InputForward from './forward';

export default class Refs extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
    this.domRef = createRef();
    this.childRef = createRef();
    this.inputRef = createRef();
  }

  componentDidMount() {
    console.log("domRef->", this.domRef); 
    // ↑ 打印出来的结果this.domRef.current 就是h1节点
    console.log("innerHTML->", this.domRef.current.innerHTML);

    console.log("childRef->", this.childRef.current); // 组件实例

    this.inputRef.current.focus();

    // 如果没有在标签上写ref属性，在componentDidMount里打印结果 { current: null }
    // 疑问： createRef在什么时候执行？
  }

  // 可以使用A1+A2的写法，注意A2必须用 { () => this.handleChild("str") }
  // ↓ A1不能使用这种写法
  // handleChild = (str) => {
  //   console.log("this->", this);
  //   this.childRef.current.changeText(str);
  // }

  // ↓ B1
  handleChild(str) {
    this.childRef.current.changeText(str);
  }

  render() {
    return (
      <div>
        <h1 ref={this.domRef}>refs text</h1>
        {/* <h1>refs text</h1> */}

        <Child ref={this.childRef}></Child>
        {/* ↓ A2不能使用这种写法 */}
        {/* <button onClick={ () => this.handleChild("new") }>修改child组件内的值</button> */}

        {/* ↓ B2 */}
        <button onClick={() => this.handleChild("new") }>修改child组件内的值</button>

        <InputForward ref={this.inputRef}></InputForward>
      </div>
    )
  }
}