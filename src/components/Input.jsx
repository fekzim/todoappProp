import React, {useState} from 'react';
import './Input.css';

export default function Input(props) {
     const [text, setText] = useState("");

  return (
    <div className="Container">
        <input type="text" placeholder='Adicione um item' value={text} onChange={(e)=> setText(e.target.value)}
        id="textInput"></input>
        <button onClick={()=>props.todoAdd(text)} id="addButton">+++</button>
    </div>
    // 
  )
}
