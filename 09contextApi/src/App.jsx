import { useState } from "react";
import userContext from "./context/context";
import "./App.css";
import Login from "./components/login";
import Profile from "./components/Profile";

function App() {
  const [username, setusername] = useState(null);
  const [password, setpassword] = useState(null);

  return (
    <>
      <userContext.Provider value={{username,setusername,password,setpassword}}>
        <Login/>
        <Profile/>
      </userContext.Provider>
    </>
  );
}

export default App;
