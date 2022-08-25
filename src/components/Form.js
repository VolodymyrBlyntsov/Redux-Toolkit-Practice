import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';
import { v4 } from 'uuid'

const Form = () => {
    const dispatch = useDispatch();
    const [todos, setTodos] = useState('');

    const addTodoHandler = () => {
        const todo = {
            id: v4(),
            text: todos,
            completed: false,
        }
        dispatch(addTodo(todo))
        setTodos('')
    }
    
    return (
        <form className='w-full flex' onSubmit={(e) => e.preventDefault()}>
            <input
                type='text'
                value={todos}
                placeholder='Type something...'
                onChange={(e) => setTodos(e.target.value)}
                className='w-full p-1 focus:outline-none focus:border-lime-500 focus: border-2 placeholder:text-sm'
            />
            <button
                type='submit'
                className='shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm'
                onClick={() => addTodoHandler()}
            >
                Submit
            </button>
        </form>
    )
}

export default Form
