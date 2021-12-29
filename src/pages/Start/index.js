import './styles.css';
import { useState } from 'react';

let clicked = false;

function Start() {
    const [start, setStart] = useState(true);

    const handleStart = () => {
        setStart(false);
        clicked = true;
    };

    return (
        <div
            className={`img${start && !clicked ? '' : ' clicked'}`}
            onClick={handleStart}
        >
            <h1>
                Tap to <br />
                get started
            </h1>
        </div>
    );
}

export default Start;
