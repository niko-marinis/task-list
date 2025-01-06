import React, {useState} from 'react'

export const ToDoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault();

        addTodo(value)
    }
  return (
    <form className='ToDoForm' onSubmit={handleSubmit}>
        <input 
            type="text" 
            className='todo-input' 
            placeholder = 'What is the task today?' 
            onChange={(e) => setValue(e.target.value)}
        />
        <button 
        type='submit' 
        className='todo-btn'>Add Task
        </button>
    </form>
  )
}
