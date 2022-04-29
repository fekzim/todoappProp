import React, { useState } from "react";

export default function List(props) {

  return (
    
    <div>
       <ul>
       {props.lista.map((item) =>{
        return(
          <li key={item.id}>{item.value}<button onClick={()=>props.remover(item.id)}>X</button></li>
        )
      } )}
       </ul>
    </div>
  )
}
