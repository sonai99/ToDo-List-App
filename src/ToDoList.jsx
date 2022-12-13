import React from 'react'

const ToDoList = (props) => { 
  return (
        <>
        <div className='todo_form'>
        <li className='todo_items'>
        <button className='todo_button' onClick={() => { props.onSelect(props.id); }}>Delete</button>
        <p className='text'>{props.text}</p>
        </li>
        </div>
        </>
  )
}

export default ToDoList