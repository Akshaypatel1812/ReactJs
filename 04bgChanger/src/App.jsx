import { useState } from "react";

import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  

  return (
    <>
      <div className="w-full h-screen" style={{ backgroundColor: color }}></div>
      <div>
        <button onClick={()=>{setColor("green")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "green" }}
        >
          Green
        </button>
        <button onClick={()=>{setColor("blue")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "blue" }}
        >
          Blue
        </button>
        <button onClick={()=>{setColor("red")}}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{ backgroundColor: "red" }}
        >
          Red
        </button>
      </div>
    </>
  );
}

export default App;
