import React, { useRef } from "react";
import "./styles.css";
import User from "./User";

export default function App() {
  let inputRef = useRef(null);
  function updateChange() {
    inputRef.current.value = "1000";
    inputRef.current.style.color = "red";
    inputRef.current.focus();
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <User ref={inputRef} /> <br />
      <button onClick={updateChange}> Click me </button>
    </div>
  );
}
