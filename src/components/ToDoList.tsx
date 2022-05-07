import React from 'react';
import { ToDo } from '../Models/Item';
import "../css/ListItems.css"

interface Props {
    todos: ToDo[];
    settodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC<Props> = ({ todos, settodos}) => {
    return (
        <div className='todos'>
            {todos.map(t => (
                <li>{t.todo}</li>
            ))}
        </div>
    );
}

export default ToDoList;