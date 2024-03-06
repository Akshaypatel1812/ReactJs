import { useState } from "react";

import "./App.css";
import Card from "./cards/card1.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-black bg-green-200 rounded-xl mb-10">Test Tailwind</h1>
      <div className="flex justify-center">
        <div className="mr-10"> <Card username='Akshay' btn='visit Akshay' />
        </div>
        <div> <Card username='Meet' btn='visit Meet'/>
        </div>
        
      </div> 
    </>
  );
}

export default App;
