import React, { Component } from 'react';
import { List } from "antd-mobile";

export default class Lists extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>text: </h1>
        <List>
          <List.Item></List.Item>
        </List>
      </div>
    )
  }
}