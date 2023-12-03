import React, { useState } from "react";
import Navbar from "./Navbar";
import "./App.css";

const App = () => {
  const [mode, setMode] = useState("light");
  const [input, setInput] = useState("");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark") 
      document.body.style.backgroundColor = "black"
      document.getElementById('inputBox').style.color = "white"
      document.querySelectorAll('.btn').forEach(button => {
        button.style.color = "white";
      });
    } else {
      setMode("light") 
      document.body.style.backgroundColor = "white"
      document.getElementById('inputBox').style.color = "black"
      document.querySelectorAll('.btn').forEach(button => {
        button.style.color = "black";
      });
    }
  }

  const handleButtonClick = (value) => {
    switch (value) {
      case "=":
        setInput((prevInput) => String(eval(prevInput)));
        break;
      case "AC":
        setInput("");
        break;
      case "DEL":
        setInput((prevInput) => prevInput.slice(0, -1));
        break;
      case "%":
        setInput((prevInput) => String(eval(prevInput) / 100));
        break;
      default:
        setInput((prevInput) => prevInput + value);
        break;
    }
  };

  return (
    <>
      <Navbar mode={mode} toggleMode={toggleMode} />

      <div className={`calculator ${mode}`}>
        <input
          type="text"
          name=""
          id="inputBox"
          placeholder="0"
          value={input}
          readOnly
        />
        <div>
          {["AC", "DEL", "%", "/"].map((value) => (
            <button
              key={value}
              className={`operator ${value.toLowerCase()}`}
              onClick={() => handleButtonClick(value)}
            >
              {value}
            </button>
          ))}
        </div>
        <div>
          {[7, 8, 9, "*"].map((value) => (
            <button
              key={value}
              className="btn"
              onClick={() => handleButtonClick(String(value))}
            >
              {value}
            </button>
          ))}
        </div>
        <div>
          {[4, 5, 6, "-"].map((value) => (
            <button
              key={value}
              className="btn"
              onClick={() => handleButtonClick(String(value))}
            >
              {value}
            </button>
          ))}
        </div>
        <div>
          {[1, 2, 3, "+"].map((value) => (
            <button
              key={value}
              className="btn"
              onClick={() => handleButtonClick(String(value))}
            >
              {value}
            </button>
          ))}
        </div>
        <div>
          {["00", 0, "."].map((value) => (
            <button
              key={value}
              className="btn"
              onClick={() => handleButtonClick(String(value))}
            >
              {value}
            </button>
          ))}
          <button className="eq-btn" onClick={() => handleButtonClick("=")}>
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
