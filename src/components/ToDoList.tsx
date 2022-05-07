import React from 'react';
import { ToDo } from '../Models/Item';
import "../css/ListItems.css"
import SingleItem from './SingleItem';

interface Props {
    todos: ToDo[];
    settodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const ToDoList: React.FC<Props> = ({ todos, settodos}) => {
    return (
        <div className='todos'>
            {todos.map(t => (
                <SingleItem 
                    todo={t}
                    key={t.id}
                    todos={todos}
                    settodos={settodos}
                />
            ))}
        </div>
    );
}

export default ToDoList;