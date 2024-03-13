import { useEffect, useState } from "react";

import "./App.css";
import ThemeBTN from "./components/ThemeBTN";

import { ThemeProvider } from "./contexts/Theme";
import Card from "./components/Card";


function App() {
  const [Theme, setTheme] = useState("light");

  
  const darkTheme=()=>{
    setTheme("dark");
  }

  const lightTheme=()=>{
    setTheme("light");
  }

  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(Theme)
  }, [Theme]);

  return (
    <ThemeProvider value={{Theme, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBTN />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card/>
              </div>
          </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
