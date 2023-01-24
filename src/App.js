import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "s uccess");
    }
  };

  return (
    <BrowserRouter>
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Routes>
        <Route path="/about" element={ <About mode={mode} toggleMode={toggleMode} />} />
      </Routes>
      <Alert alert={alert} mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <Textform showAlert={showAlert} heading="Enter your Text here" />
      </div>

      <div className="container my-3 ">
       
      </div>
    </BrowserRouter>
  );
}

export default App;
