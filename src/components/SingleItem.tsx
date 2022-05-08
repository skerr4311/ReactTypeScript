import React, {useEffect, useRef, useState} from 'react';
import { ToDo, Actions } from '../Models/Item';
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "../css/ListItems.css";

interface Props {
    todo: ToDo;
    todos: ToDo[];
    dispatch: React.Dispatch<Actions>;
}

const SingleItem: React.FC<Props> = ({todo, todos, dispatch}) => {
    const [edit, setEdit] = useState<Boolean>(false);
    const [edittodo, setEditToDo] = useState<string>(todo.todo);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDone = (id:number) => {
        dispatch({type:"done", payload:id});
    };

    const handleDelete = (id:number) => {
        dispatch({type:"remove", payload:id});
    };

    const handleEdit = (e: React.FormEvent, id:number) => {
        e.preventDefault();
        dispatch({type:"edit", payload:{id:id, todo:edittodo}}); //not working....
        console.log(edittodo);
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