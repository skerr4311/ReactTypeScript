import React, {useState} from 'react';
import './App.css';
import InputField from './components/InputField';

const App: React.FC = () => {
  const [todo, settodo] = useState<string>("");
  console.log(todo);
  return (
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputField todo={todo} settodo={settodo}/>
    </div>
  );
}

export default App;
