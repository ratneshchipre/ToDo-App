import React, { useEffect, useRef, useState } from 'react'
import headImg from '../assets/headImg.png'
import TodoItems from './TodoItems';
import EditTodo from './EditTodo';

const Todo = () => {

  const [todoList, setTodoList] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []);
  const inputRef = useRef();

  const addItems = () => {
    const inputText = inputRef.current.value.trim();

    if (inputText === '') {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
      isEditing: false
    }

    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = '';
  };

  const editTodo = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: todo.text, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (id, newText) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const deleteTodo = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggleStatus = (id) => {
    setTodoList((prvTodos) => {
      return prvTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete }
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList])

  return (
    <div className='w-[30rem] h-auto max-h-[32rem] bg-[#FFFFFF] shadow-lg rounded-xl flex flex-col items-center py-[2rem] px-[1.8rem]'>

      {/* head */}
      <div className='flex items-center justify-center gap-[0.5rem]'>

        <img src={headImg} className='h-[1.85rem] sm:h-[2rem]' />
        <h2 className='text-[1.65rem] sm:text-[1.8rem] font-[650] text-center text-[#323234]'>ToDo App</h2>

      </div>

      {/* task input */}
      <div className='w-full flex mt-[2.5rem]'>

        <input type="text"
          className='w-full bg-[#85838634] py-[0.65rem] px-[0.85rem] sm:py-[0.8rem] sm:px-[1rem] outline-none rounded-tl-[0.5rem] rounded-bl-[0.5rem] text-[#323234] text-[0.95rem] sm:text-[1rem] font-[550] transition hover:border-solid hover:border-[##323234] hover:border-1 focus:border-solid focus:border-[##323234] focus:border-1'
          placeholder='Add your task'
          ref={inputRef}
        />

        <button
          className='bg-[#323234] text-white text-[0.95rem] sm:text-[1rem] px-[0.9rem] sm:px-[1rem] rounded-tr-[0.5rem] rounded-br-[0.5rem] cursor-pointer outline-none border-none hover:bg-[#323234f3] transition'
          onClick={addItems}
        >Add</button>

      </div>

      {/* tasks container */}
      <div className='flex flex-col gap-[1rem] overflow-auto justify-between mt-[2rem] w-full'>
        {todoList.map((item, index) => {
          return item.isEditing ? (
            <EditTodo
              key={index}
              task={item}
              editTodo={editTask}
            />
          ) : (
            <TodoItems
              key={index}
              task={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggleStatus}
              editTodo={editTodo}
            />
          );
        })}
      </div>

    </div>
  )
}

export default Todo