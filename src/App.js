import React, {useState} from 'react';
import './App.css';







function App() {
//State
const [newItem, setNewItem] = useState("");
const [items, setItems] = useState([]);


function deleteItem(id){
  const newArray = items.filter(item => item.id !== id);
  setItems(newArray);
}

function addItem() {
  // ! Check for empty item
  if (!newItem) {
    alert("Press enter an item.");
    return;
  }

  const item = {
    id: Math.floor(Math.random() * 1000),
    value: newItem,
  };

  // Add new item to items array
  setItems((oldList) => [...oldList, item]);

  // Reset newItem back to original state
  setNewItem("");

  console.log(items)
}


  return (
    <div className="App">
     <h1> Todo List </h1>

     <input type="text" placeholder='adicione um item' value={newItem}
     onChange={(e)=> setNewItem(e.target.value) }></input>
     <button onClick={()=> addItem()}>+</button>

     <ul>
      {items.map((item) =>{
        return(
          <li key={item.id}>{item.value}<button onClick={()=> deleteItem(item.id)}>X</button></li>
        )
      } )}
     </ul>
    </div>
  );
}

export default App;
