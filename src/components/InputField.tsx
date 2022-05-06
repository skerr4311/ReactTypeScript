import React from 'react'
import "../css/InputField.css";

interface Props {
    todo: string;
    settodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({todo, settodo}) => {
    return (
        <form className='input'>
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