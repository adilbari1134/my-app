// import logo from './logo.svg';
import Navbar from "./components/Navbar";

import "./App.css";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/About";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title="TextUtils is amazing"

      // }, 2000);

      // setInterval(() => {
      //   document.title="Install Now"

      // }, 1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");

      document.title = "TextUtils - Light Mode";
    }
  };
  return (
    <>
    {/* <Router> */}
      <Navbar title="TextUtils"  about="About Us" mode={mode}  toggleMode={toggleMode} />
      {/* <Navbar  /> */}
      <Alert alert={alert} />
      <div className="container my-3">
      {/* <Routes> */}
              {/* <Route exact path="/" element={ */}
              <TextForm
              showAlert={showAlert}
              heading="Enter your Text to Analyze"
              mode={mode}/>
            {/* }/> */}
              {/* // <Route exact path="/about" element={<About/>}/> */}
            {/* </Routes> */}
        
      </div>
    {/* // </Router> */}
    </>
  );
}

export default App;
