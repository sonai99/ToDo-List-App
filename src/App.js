import React, { useState } from "react";
import ToDoList from "./ToDoList";
import './index.css';

const App = () => {
    const [inputList, setInputList] = useState("");
    const [itemsList, setItemsList] = useState([]);


    const changeInput = (e) => {
      setInputList(e.target.value);
    };

    const addItems = () => {
      setItemsList ((oldList) => {
        return [...oldList, inputList];
      });
      setInputList('');
      // console.log('button clicked')
    };

    
    const deleteItems = (id) => {
      setItemsList((oldList) => {
        return oldList.filter((arrElement, index) => {
            return index !== id;
        });
      });
  };


    return( 
    <>
    <div className="wrapper">
        <div className="center_div">
            <br />
            <h1 className="h1">ToDo List</h1>
            <br />
            <div class="todo_input">
            <input type="text" placeholder="Add a Item" value={inputList} onChange={changeInput} onSubmit={addItems}/>
            </div>
            <button className='todo_add_button' onClick={addItems}>Add todo</button>
            <ol>
              {itemsList.map( (items, index) => {
               return <ToDoList 
                text={items}
                key={index}
                id={index}
                onSelect={deleteItems}
                />
              })}
            </ol>
        </div>
    </div>
    
    </>
);
};
export default App;