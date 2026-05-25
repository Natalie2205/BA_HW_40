import { useState } from 'react';

export const BgColor = () => {
    const [color, setColor] = useState("white");
    return (
        <div style={{ backgroundColor: color, padding: '20px' }}>
            <button onClick={() => setColor(color === "white" ? "yellow" : "white")}>
                Змінити колір
            </button>
        </div>
    );
}

export default BgColor;