import React, {useRef} from 'react'
import "../css/InputField.css";

interface Props {
    todo: string;
    settodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({todo, settodo, handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    return (
        <form className='input' onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur();
            }}>
             <input
                ref={inputRef} 
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