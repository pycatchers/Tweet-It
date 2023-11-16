import UserIcon from "./UserIcon";
import UserName from "./UserName";
import Tweet from "./Tweet";
import Reach from "./Reach";
import { Component } from "react";

class TweetContainerClass extends Component {
  render() {
    return (
      <div style={{ display: "flex" }}>
        <UserIcon className="child1" />
        <div className="child2">
          <div className="row1" style={{ display: "flex", marginBottom: 10 }}>
            <UserName />
          </div>

          <Tweet className="row2" />

          <div
            className="row3"
            style={{
              display: "flex",
              width: "25vw",
              justifyContent: "space-between",
            }}
          >
            <Reach />
          </div>
        </div>
      </div>
    );
  }
}

export default TweetContainerClass;
