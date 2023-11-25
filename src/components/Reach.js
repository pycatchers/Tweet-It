import { useState } from "react";
import { BiBarChart } from "react-icons/bi";
function Reach() {
  const [reach, setReach] = useState(0);
  function addReach() {
    console.log("add reach");
    setReach(reach + 1);
  }
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <BiBarChart onClick={addReach} />
      <span style={{ marginLeft: 10 }}>{reach}</span>
    </div>
  );
}

export default Reach;
