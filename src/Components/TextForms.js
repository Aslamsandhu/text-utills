  import React, {useState} from 'react'
function TextForms(props) {
const handleUpClick = () => {
    // console.log('Upper case was clicked.' + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
}
const handleLoClick = () => {
  // console.log('Upper case was clicked.' + text);
  let newText = text.toLowerCase();
  setText(newText);
  props.showAlert("Converted to Lowercase", "success");
}
const handleClear = () => {
  // console.log('Upper case was clicked.' + text);
  let newText = "";
  setText(newText);
  props.showAlert("Text is cleared", "success");
}
const handleOnchange = (event) => {
    // console.log('On change.');
    setText(event.target.value);
}
const [text, setText] = useState('Enter text here.');
  return (
    <>
    <div>
        <h2 style={{ color: props.mode === 'dark'?'white':'black'}}>{props.heading}</h2> 
  <div className="mb-3" style={{ color: props.mode === 'dark'?'white':'black'}}>
  <textarea className="form-control" value={text} onChange={handleOnchange} style={{ backgroundColor: props.mode === 'dark'?'gray':'white', color: props.mode === 'dark'?'white':'black'}} id="mybox" rows="8"></textarea>
</div>
<button className="btn.btn-primary mx-1" onClick={handleUpClick}>Convert to Upper Case</button>
<button className="btn.btn-primary mx-1" onClick={handleLoClick}>Convert to Lower Case</button>
<button className="btn.btn-primary mx-1" onClick={handleClear}>Clear text</button>
    </div>
    <div className='container my-3' style={{ color: props.mode === 'dark'?'white':'black'}}>
      <h1>Your text summary</h1>
      <p>{text.split(" ").length - 1} words and {text.length} characters.</p> 
      <p>{0.008 * text.split(" ").length} Minutes read.</p>
      <h2>Preview</h2>
      <p>{text.length>0?text: "Enter text in textbox to preview." }</p>
    </div>
    </>
  )
}


export default TextForms
