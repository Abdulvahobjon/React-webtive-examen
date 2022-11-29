import { React, useState } from "react";
import "./count.css";

function Count() {
  const [counter, setcounter] = useState(0);

  function Increase() {
    setcounter(counter + 1);
  }
  function Decrease() {
    setcounter(counter - 1);
  }
  function Reset() {
    setcounter(0);
  }
  function Two2x() {
    setcounter(counter+counter > 10000 ? 0 : counter+counter );
  }
  function Two5x() {
    setcounter(counter**5 > 10000 ? 0 : counter**5);
  }
  return (
    <div className="container">
    <h1>Counter </h1>
      <span id="counter">{counter}</span>
      <div class="btn-container">
        <button onClick={Increase}  class="btn increase">Increase</button>
        <button onClick={Reset}  class="btn reset">Reset</button>
        <button  onClick={Decrease} class="btn decrease">Decrease</button>
        <button  onClick={Two2x} class="btn decrease">2X</button>
      </div>
    </div>
  );
}

export default Count;
