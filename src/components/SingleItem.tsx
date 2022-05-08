import React, {useEffect, useRef, useState} from 'react';
import { ToDo } from '../Models/Item';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "../css/ListItems.css";
import ToDoList from './ToDoList';

interface Props {
    todo: ToDo;
    todos: ToDo[];
    settodos: React.Dispatch<React.SetStateAction<ToDo[]>>;
}

const SingleItem: React.FC<Props> = ({todo, todos, settodos}) => {
    const [edit, setEdit] = useState<Boolean>(false);
    const [edittodo, setEditToDo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDone = (id:number) => {
        settodos(todos.map((todo) => todo.id === id ? {...todo, isDone: !todo.isDone } : todo))
    };

    const handleDelete = (id:number) => {
        settodos(todos.filter((todo) => todo.id !== id));
    };

    const handleEdit = (e: React.FormEvent, id:number) => {
        e.preventDefault();
        settodos(todos.map((todo) => (
            todo.id === id ? {...todo, todo:edittodo} : 
            todo
        )))
        setEdit(false);
    };

    useEffect(() => {
        inputRef.current?.focus();
    }, [edit]
    )

    return (
        <form action="" className="todo_single" onSubmit={(e) => handleEdit(e, todo.id)}>
            {edit ? (
                <input ref={inputRef} value={edittodo} onChange={(e) => setEditToDo(e.target.value)} className="todo_single_text"/>
            ) : (
                todo.isDone ? (
                    <s className="todo_single_text">
                        {todo.todo}
                    </s>
                ) : (
                    <span className="todo_single_text">
                        {todo.todo}
                    </span>
                )
            )}
            <span className="icon" onClick={() => {
                if(!todo.isDone){
                    if(!edit){
                    setEdit(!edit);
                    }else{
                        setEdit(!edit);
                    }
                }
            }}>
                <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
                <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
                <MdDone />
            </span>
        </form>
    );
}

export default SingleItem;