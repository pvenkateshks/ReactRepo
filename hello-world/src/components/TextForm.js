import React, {useState} from 'react'



export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = ()=>{
    console.log("Uppercase was clicked" +text);
    let str = text.toUpperCase();
    //to update the text value
    setText(str);
  }
  const handleChange= (event)=>{ //Function
    console.log("changed"); 
    setText(event.target.value);
  }
 
  return (
  <>
    <div>

  <div class="container">
    <label for="mybox" class="form-label"><h3>{props.heading}</h3></label>
    <textarea class="form-control" id="mybox" rows = "8" value ={text} onChange={handleChange}/>
    
  </div>
  <button class = "btn btn-primary" onClick={handleUpClick}> Convert to upper case</button>
    </div>
    <div className="container my-3">
      <h1>your text summary </h1>
      <p>{text.split(" ").length}</p>
    </div>
    </>
  )
}
