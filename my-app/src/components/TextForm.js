import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = (e) => {
    //console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLoClick = (e) => {
    //console.log("uppercase was clicked");
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleReplace = () => {
    //console.log(text);
    // let newText = text.replace(/[ ]/, "Prashant_Pal");
    let newText = text.replace(/Prashant/i, "Prashant Pal");
    setText(newText);
  };

  const handleClear = (e) => {
    
    let newText = "";
    setText(newText);
  };

  // this handleOnChange fun helps us writing in editor.

  const handleOnChange = (event) => {
    //console.log("handled changed");
    setText(event.target.value);
  };

  // this is our useState hook, setText me joh bhi value ayegi woh usko text ke barabar kar dega

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control my-3"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>

          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to UpperCase
          </button>

          <button className="btn btn-primary mx-2" onClick={handleLoClick}>
            Convert to LowerCase
          </button>

          <button className="btn btn-primary mx-2" onClick={handleReplace}>
            Replace Word
          </button>

          <button className="btn btn-primary mx-2" onClick={handleClear}>
            Clear All
          </button>

        </div>
      </div>

      <div className="container my-3">
        <h2>Your Summary here</h2>
        <p>{text.split(" ").length} words & {text.length} Characters</p>
        <p>{0.008 *text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
