import { Component } from "react";

export default class Id extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>id: {this.props.match.params.id}</h1>
      </div>
    );
  }
}