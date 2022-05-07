import React from 'react'
import "../css/InputField.css";

interface Props {
    todo: string;
    settodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, settodo, handleAdd}) => {
    return (
        <form className='input' onSubmit={handleAdd}>
             <input 
                type="text" 
                placeholder='Enter Task' 
                className="inputbox"
                value={todo}
                onChange={(e) => settodo(e.target.value)}
             />
             <button type="submit" className="inputsubmit">Go</button>
        </form>
    );
}

export default InputField;