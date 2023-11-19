import React from "react";
//import logo from "./logo.svg";
import "./App.css";

function addText(){
  alert('This is a test');
}

function App() {
  return (
    <>
      <h1>Welcome to Rettiwt!</h1>
      <h3>Project by Marvin, Nathan, Jonathan, and Carlos</h3>
      <label> Message input: <input name="userMessage"></input></label>
      <button onClick={addText}>Post it!</button>
    </>
  );
}

export default App;
