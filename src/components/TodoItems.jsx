import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";

const TodoItems = ({ task, id, isComplete, deleteTodo, toggle, editTodo }) => {
    return (
        // task items
        <div className='flex items-center w-full py-[0.4rem] px-[0.9rem] sm:py-[0.5rem] sm:px-[1rem] bg-[#323234] text-white rounded-[0.5rem]'>

            <FontAwesomeIcon
                icon={isComplete ? faCircleCheck : faCircle}
                className='mr-[0.6rem] cursor-pointer text-[0.9rem] sm:text-[1rem]'
                onClick={() => { toggle(id) }}
            />
            <p className={`w-full text-[#FFFFFF] text-[0.95rem] sm:text-[1rem] ${isComplete ? 'line-through' : ''}`}>{task}</p>

            <div className='flex'>

                <FontAwesomeIcon icon={faPenToSquare}
                    className='mr-[0.6rem] ml-[0.8rem] cursor-pointer text-[0.9rem] sm:text-[1rem]'
                    onClick={() => { editTodo(id) }}
                />
                <FontAwesomeIcon icon={faTrashCan}
                    className='cursor-pointer text-[0.9rem] sm:text-[1rem]'
                    onClick={() => { deleteTodo(id) }}
                />

            </div>

        </div>

    )
}

export default TodoItems