import React from 'react';
import { ToDo } from '../Models/Item';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "../css/ListItems.css";

interface Props {
    todo: ToDo;
    todos: ToDo[];
    settodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const SingleItem: React.FC<Props> = ({todo, todos, settodos}) => {
    return (
        <form action="" className="todo_single">
            <span className="todo_single_text">
                {todo.todo}
            </span>
            <span className="icon"><AiFillEdit /></span>
            <span className="icon"><AiFillDelete /></span>
            <span className="icon"><MdDone /></span>
        </form>
    );
}

export default SingleItem;