import { useCallback, useEffect, useState } from "react";

import "./App.css";

function App() {
  // const [inputValue, setInputValue] = useState('Akshaypatel1812');
  const [user, setUser] = useState("Akshaypatel1812");
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => {
        return res.json();
      })
      .then((resJson) => {
        console.log(resJson);
        setData(resJson);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [user]);

  // const handleInputChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  // const handleFormSubmit = (e) => {
  //   e.preventDefault();
  //   setUser(inputValue);
  // };

  return (
    <>
      {/* <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button type="submit" onSubmit={handleFormSubmit}>Submit </button>
      </form> */}
      <input
        type="text"
        value={user}
        onChange={(e) => {
          setUser(e.target.value);
        }}
      />
      <h1>git data of: {user}</h1>
      <div className="flex flex-col items-center justify-center h-screen">
        <img
          src={data.avatar_url}
          alt="centered image"
          className="width={250} h-auto mb-4"
        />
        <p className="text-2xl font-bold">GitHub Followings:{data.following}</p>
        <p className="text-2xl font-bold">GitHub Followers:{data.followers}</p>
      </div>
    </>
  );
}

export default App;
