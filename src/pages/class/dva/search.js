import React, { Component } from 'react';
import { SearchBar } from "antd-mobile";

export default class Search extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = (value) => {
    this.setState({ value });
  }

  handleSubmit = () => {
    console.log("submit");
    this.props.dispatch({
      // type: "search/getLists", // models/search.js中定义的方法名
      type: "search/getListsAsync", // models/search.js中定义的方法名
      payload: this.state.value
    })
  }

  render() {
    return (
      <div>
        <SearchBar
          autoFocus
          value={this.state.value}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        ></SearchBar>
      </div>
    )
  }
}