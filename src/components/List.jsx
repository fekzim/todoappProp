import React, { useState } from "react";
import './List.css';

export default function List(props) {

  return (
    
    <div className="List-container">
       <ul>
       {props.lista.map((item) =>{
        return(
          <li key={item.id}><p>{item.value}</p><button onClick={()=>props.remover(item.id)}>X</button></li>
        )
      } )}
       </ul>
    </div>
  )
}
