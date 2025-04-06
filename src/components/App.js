
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";

const App = () => {
  let [isLoggedIn, setisLoggedIn] = useState(false)
  return (
    <div>
      <h1>Parent Component </h1>
      <Child
      isLoggedIn = {isLoggedIn}
      setisLoggedIn = {setisLoggedIn}
       />
    
    </div>
  )
}

export default App
