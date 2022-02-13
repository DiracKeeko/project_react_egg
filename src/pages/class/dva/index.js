import React, { Component } from 'react';
import Search from "./search";
import Lists from "./lists";
import { connect } from "dva";

class Dva extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Search {...this.props}></Search>
        <Lists {...this.props}></Lists>
      </div>
    )
  }
}

export default connect(({search}) => ({ search }) )(Dva);
// ↑ 这里的search就是 /src/models/search  通过connect函数对Dva组件进行处理，将search内的state变成了Dva组件的props
// 在Lists组件中console.log(this.props) 可以发现多出了一个search属性，和一个dispatch方法
// search: {text: "dva", lists: Array(0)}