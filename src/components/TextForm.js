import React, { useState } from "react";
export default function TextForm(props) {
    const handleUpCase = () =>{
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success");
        
    }
    const handleLoCase = () =>{
      let newText=text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to lower case","success");
      
  }
      const handleCapitalize = () =>{
        
      let newText= text.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
      setText(newText);
      props.showAlert("Each first letter is converted to upper case","success");
      
  }
        const handleClear = () =>{
          let newText= "";
      setText(newText);
      props.showAlert("Text is cleared","success");
        }
        const handleCopy = () =>{
          var text= document.getElementById("myBox");
          text.select();
          navigator.clipboard.writeText(text.value);
          props.showAlert("Text is copied","success");
        }
    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
  const [text, setText] = useState("Enter Text Here");
  return (
    <>
    <div className="mb-3 container" style={{color:props.mode==='light'?'black':'white'}}>
      <h1>{props.heading}</h1>
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}} id="myBox" rows="9"></textarea>
      <button className="btn btn-primary my-3 mx-2" onClick={handleUpCase}>Convert to UpperCase</button>
      <button className="btn btn-primary my-3 mx-2" onClick={handleLoCase}>Convert to LowerCase</button>
      <button className="btn btn-primary my-3 mx-2" onClick={handleCapitalize}>Capitalize</button>
      <button className="btn btn-primary my-3 mx-2" onClick={handleClear}>Clear</button>
      <button className="btn btn-primary my-3 mx-2" onClick={handleCopy}>Copy</button>
    </div>
    <div className="container"  style={{color:props.mode==='light'?'black':'white'}}>
      <h2>Your Text summary</h2>
      <p>{text.trim().split(/\s+/).length} words, and {text.length  } characters</p>
      <p>{0.008*text.split(" ").length}  Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter something in the text box to preview"}</p>
    </div>
    </>
  );
}
