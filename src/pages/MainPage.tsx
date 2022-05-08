import React, {useState} from 'react';
import '../css/mainPage.css';
import InputField from '../components/InputField';
import ToDoList from '../components/ToDoList';
import { ToDo } from '../Models/Item'; 

const App: React.FC = () => {
  const [todo, settodo] = useState<string>("");
  const [todos, settodos] = useState<ToDo[]>([]);
  
  const HandleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if(todo){
      settodos([...todos, 
        {
          id: Date.now(),
          todo: todo,
          isDone: false        
        }]);
      settodo("");
    }
  };

  console.log(todo);
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} settodo={settodo} handleAdd={HandleAdd}/>
      <ToDoList todos={todos} settodos={settodos}/>
    </div>
  );
}

export default App;
