import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';
import { ToDo } from './Models/Item'; 

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
      {todos.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
}

export default App;
