import React, { useState } from 'react'

const EditTodo = ({ task, editTodo }) => {

    const [value, setValue] = useState(task.text);

    const editTask = () => {
        if (value.trim() !== "") {
            editTodo(task.id, value);
        }
    };

    return (
        <div className='w-full flex'>

            <input
                type="text"
                className='w-full bg-[#85838634] py-[0.4rem] px-[0.9rem] sm:py-[0.5rem] sm:px-[1rem] outline-none rounded-tl-[0.5rem] rounded-bl-[0.5rem] text-[#323234] text-[0.95rem] sm:text-[1rem] font-[550] transition hover:border-solid hover:border-[##323234] hover:border-1 focus:border-solid focus:border-[##323234] focus:border-1'
                placeholder='Update ToDo'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />

            <button
                className='bg-[#323234] text-white text-[0.95rem] sm:text-[1rem] px-[0.9rem] sm:px-[1rem] rounded-tr-[0.5rem] rounded-br-[0.5rem] cursor-pointer outline-none border-none hover:bg-[#323234f3] transition'
                onClick={editTask}
            >Update</button>

        </div>
    )
}

export default EditTodo