import React, {useState} from 'react';

export default function Input(props) {
     const [text, setText] = useState("");

  return (
    <div className="input">
        <input type="text" placeholder='Adicione um item' value={text} onChange={(e)=> setText(e.target.value)}></input>
        <button onClick={()=>props.todoAdd(text)}>+++</button>
    </div>
    // 
  )
}
