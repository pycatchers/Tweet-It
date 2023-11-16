import { Component, useState } from "react";
import { BiBarChart } from "react-icons/bi";
class Reach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reach: 0,
    };
  }
  addReach = () => {
    console.log("add reach");
    this.setState({
      reach: this.state.reach + 1,
    });
  };
  render() {
    return (
      <div style={{ display: "flex", alignItems: "center" }}>
        <BiBarChart onClick={this.addReach} />
        <span style={{ marginLeft: 10 }}>{this.state.reach}</span>
      </div>
    );
  }
}
export default Reach;
