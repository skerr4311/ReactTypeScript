import React, {useState, useReducer} from 'react';
import '../css/mainPage.css';
import InputField from '../components/InputField';
import ToDoList from '../components/ToDoList';
import { ToDo, Actions } from '../Models/Item'; 

const ToDoReducer = (state: ToDo[], action:Actions ) => {
    switch(action.type){
        case "add":
            return [...state, { id: Date.now(), todo: action.payload, isDone: false}];
        case "remove":
            return state.filter((todo) => todo.id !== action.payload);
        case "edit":
            return state.map((todo) => (
                todo.id === action.payload.id ? {...todo, todo:action.payload.todo} : 
                todo));
        case "done":
            return state.map((todo) => todo.id === action.payload ? {...todo, isDone: !todo.isDone } : todo);
    }
};

const App: React.FC = () => {
  const [todo, settodo] = useState<string>("");
  const [state, dispatch] = useReducer(ToDoReducer, []);
  
  const HandleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      dispatch({type:"add", payload:todo});
      settodo("");
    }
  };

  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} settodo={settodo} handleAdd={HandleAdd}/>
      <ToDoList todos={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
