import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength]=useState(15);
  const [numAllowed,setNumAllowed]=useState(false);
  const [specialChar,setSpecialChar]=useState(false);

  let passwordRef=useRef(null)
  
  let passwordGenerator=useCallback(()=>{
    let pass="";
    let strForPass="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let num="1234567890"
    let sc="!@#$%^&*()-_=+[]{}|;:,.<>?"
    if(numAllowed){
      strForPass=strForPass+num;
    }
    if(specialChar){
      strForPass=strForPass+sc;
    }
    for (let i = 1; i <= length; i++) {
      let random=Math.floor(Math.random()*strForPass.length+1)
      pass = pass+strForPass.charAt(random);
    }

    setPassword(pass)
  },[length,numAllowed,specialChar,setPassword])

  const copyPassword = () => {
    passwordRef.current.select();
    document.execCommand("copy");  //document.execCommand("copy") is a JavaScript method that allows you to copy text to the clipboard. When you call this method, it checks if the current selection (text highlighted on the page) is editable and then attempts to execute the "copy" command. If successful, it copies the selected text to the clipboard.
  };

  useEffect(()=>{
    passwordGenerator()
  },[setPassword,length,numAllowed,specialChar])
  return (
    <>
     {/* outer most div */}
      <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div>
            <input type="text" className="outline-none w-full py-1 px-3" placeholder="Password" readOnly value={password} ref={passwordRef} />

            <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' onClick={copyPassword}>copy</button>
        </div>

        <div className='flex text-sm gap-x-20'>
          <div className='flex items-center gap-x-1'>
            <input type="range" className='cursor-pointer' min={8} max={50} value={length} onChange={(e)=>{setLength(e.target.value)}}/>
            <p>length:{length}</p>
          </div>

          <div className="flex items-center gap-x-2">
            <input type="checkBox" id="numInput" onChange={()=>{
                    setNumAllowed((prev) => !prev)
            }}/>
            <label htmlFor="numInput">AllowNums</label>
          </div>

          <div className="flex items-center gap-x-2">
            <input type="checkBox" id="charInput" onChange={()=>{
                    setSpecialChar((prev) => !prev)
            }}/>
            <label htmlFor="charInput">AllowSpecialChar</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
