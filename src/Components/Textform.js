import React, { useState } from 'react';

export default function Textform (props) {

    const [text, setText] = useState('');
    // text = "new text" //Wrong way to change the state
    // setText = ("new text") //Correct way to change the state
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text); 
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLowClick = () =>{
        // console.log("Uppercase was clicked" + text); 
        let newText = text.toLowerCase();
        setText(newText);
    }
    
    const handleCopyText = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const handleExtraSpaces = () => { // Using regex
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
    }

    const handleClearClick = () =>{
        // console.log("Uppercase was clicked" + text); 
        let newText = '';
        setText(newText);
    }
    const handleOnChange = (event) =>{
        // console.log("On Change");
        setText(event.target.value)
    }

    return (
        <>
        <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label for="myBox" className="form-label"></label>
                <textarea type="text" className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>
                Convert To Uppercase
            </button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>
                Convert To Lowercase
            </button>
            
            <button className="btn btn-primary mx-1" onClick={handleCopyText}>
                Copy To Clipboard
            </button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
                Remove Extra Spaces
            </button>
            <button className="btn btn-danger mx-1" onClick={handleClearClick}>
                Clear Text
            </button>
        </div>
        <div className="container my-4">
            <h1>Your Summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            {/* Calculating number of words and number of characters as per input */}
            <p>{0.008 * text.split(" ").length} minutes to read.</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}


