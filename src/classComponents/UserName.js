import { Component } from "react";
import { FcApproval } from "react-icons/fc";

class UserName extends Component {
  render() {
    return (
      <div>
        <div style={{ display: "flex", alignItems: "center", height: 25 }}>
          <h4>Elon Musk</h4>
          <FcApproval />
          <p style={{ color: "lightgray" }}>@elonmusk . Feb 11</p>
        </div>
        <span>Long day at Twitter HQ with eng team</span>
      </div>
    );
  }
}

export default UserName;
