import React from 'react';
import { ToDo, Actions } from '../Models/Item';
import "../css/ListItems.css"
import SingleItem from './SingleItem';

interface Props {
    todos: ToDo[];
    dispatch: React.Dispatch<Actions>;
}

const ToDoList: React.FC<Props> = ({ todos, dispatch}) => {
    return (
        <div className='todos'>
            {todos.map(t => (
                <SingleItem 
                    todo={t}
                    key={t.id}
                    todos={todos}
                    dispatch={dispatch}
                />
            ))}
        </div>
    );
}

export default ToDoList;