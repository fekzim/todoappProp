import React, {useState} from 'react';
import './App.css';
import Input from './components/Input';
import List from './components/List';





function App() {
//State
const [newItem, setNewItem] = useState("");
const [items, setItems] = useState([]);

function deleteItem(id){
  const newArray = items.filter(item => item.id !== id);
  setItems(newArray);
}

function addItem(todo) {
  // ! Check for empty item
   if (!todo) {
     alert("Press enter an item.");
    return;
   }

  const item = {
    id: Math.floor(Math.random() * 1000),
    value: todo,
  };

  // Add new item to items array
  setItems((oldList) => [...oldList, item]);

  // Reset newItem back to original state
  setNewItem("");

  console.log(items)

}

function enviarInfo(n){

  let numero;
  numero = n;
  console.log(numero)
  return numero;
}

  return (
    <div className="App">
     <h1> Todo List </h1>
     <Input clicar={enviarInfo} todoAdd={addItem}></Input>
     {/* <ul>
      {items.map((item) =>{
        return(
          <li key={item.id}>{item.value}<button onClick={()=> deleteItem(item.id)}>X</button></li>
        )
      } )}
     </ul> */}
     <List lista={items} remover={deleteItem}></List>
    </div>
  );
}

export default App;
