<<<<<<< HEAD
function Reach(){
    return(
      <div>Reach</div>
    )
=======
import { useState } from "react";
import { BiBarChart } from "react-icons/bi";
function Reach() {
  const [reach, setReach] = useState(0);
  function addReach() {
    console.log("add reach");
    setReach(reach + 1);
>>>>>>> bfc6f8ba0452e0a11ef19c67f9fb129f174313ef
  }
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <BiBarChart onClick={addReach} />
      <span style={{ marginLeft: 10 }}>{reach}</span>
    </div>
  );
}

export default Reach;
