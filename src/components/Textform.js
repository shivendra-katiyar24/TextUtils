// import PropTypes from 'prop-types';
import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText); //CHECK
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("You have got a Re-Do!", "success");
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  // const handlePreview=(event)=>{
  //     setText(event.target.value);
  // }

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text has been copied!", "success");
  };

  // const [mode,setMode]= useState('light');
  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          {/* <label htmlFor="myBox" className="form-label">{props.heading}</label> */}
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-2"
          onClick={handleLoClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-2"
          onClick={handleExtraSpaces}
        >
          Removing Extra Spaces
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-2"
          onClick={handleCopyText}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary my-3 mx-2"
          onClick={handleClearClick}
        >
          Fresh Start
        </button>
      </div>

      <div className="container my-2">
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>
          {parseFloat(
            0.008 *
              text.split(" ").filter((element) => {
                return element.length !== 0;
              }).length
          ).toFixed(2)}{" "}
          Minutes to read this text
        </p>
      </div>

      <div className="container my-3">
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      <hr class="border border-danger border-2 opacity-50"></hr>
    </>
  );
}
