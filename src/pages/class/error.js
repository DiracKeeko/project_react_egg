import React, { Component } from 'react';

export default class Error extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    // console.log(this.state.arr[0]);
    console.log(this.state.arr?.slice()); // ?. 语法
    return (
      <div>
        error
      </div>
    )
  }
}