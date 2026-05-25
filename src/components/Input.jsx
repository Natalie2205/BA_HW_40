import { useState } from "react";

const Input = () => {
    const [value, setValue] = useState('');

    return (
        <div>
            <input
                type='text'
                value={value}
                placeholder="Enter your name"
                onChange={(e) => setValue(e.target.value)} />
            
            <h3>`Hello {value}`</h3>
        </div>
    )
}

export default Input;
