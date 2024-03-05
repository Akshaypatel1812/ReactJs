import { useState } from "react";

import "./App.css";

function App() {
  let [count, setCount] = useState(10);
  let message=document.getElementById('message');


  function plusVal() {
    if (count >= 20) {
      
      message.innerHTML='Maximum limit reached!'
      setTimeout(()=>{
        message.innerHTML=''
      },2000)
      
    } else {
      setCount(count + 1);
    }
  }

  function minusVal() {
    if (count <= 0) {
      
      message.innerHTML='Minimum limit reached!'
      setTimeout(()=>{
        message.innerHTML=''
      },2000)
    } else {
      setCount(count - 1);
    }
  }

  return (
    <>
      <h2>Counter App</h2>
      <p>{count}</p>
      <button onClick={plusVal}>+{count}</button>
      <button onClick={minusVal}>-{count}</button>
      <h3 id="message"></h3>
    </>
  );
}

export default App;
