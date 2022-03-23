import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpChange = () => {
    // console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "success");
  };

  const handleLoChange = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "success");
  };

  const handleClearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text Cleared", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState(" ");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }}
            rows="8"
            value={text}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpChange}>
          Convert To UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoChange}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-5"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length} Words and {text.length} Characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h3> Preview</h3>
        <p>{text.length>0? text : "Enter something in the above text area to preview it here."}</p>
      </div>
    </>
  );
}
