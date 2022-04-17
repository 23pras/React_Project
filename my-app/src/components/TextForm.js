import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = (e) => {
    //console.log("uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };

  // this handleOnChange fun helps us writing in editor.

  const handleOnChange = (event) => {
    //console.log("handled changed");
    setText(event.target.value);
  };

  // this is our useState hook, setText me joh bhi value ayegi woh usko text ke barabar kar dega

  const [text, setText] = useState("Enter text here");
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control my-3"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="8"
        ></textarea>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
      </div>
    </div>
  );
}
