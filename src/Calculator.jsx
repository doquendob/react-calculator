import React, {useState} from 'react';
import Digits from './Digits';
import './Calculator.css';

function Calculator(props) {
    const [displayValue, setDisplayValue] = useState('');

    const clearInitialInput = () => {
        setDisplayValue('');
    }

    const handleDisplayChange = (value) => {
        if(value === '+' || value === '*' || value === '/') {
            clearInitialInput();
        } else {
            setDisplayValue(value);
        }
    }

    return (
        <div className='calculator'>
           <h2>My calculator</h2>
           <div className='output'>
             <p>{displayValue}</p>
           </div>
           <div id='digits-panel'>
             <Digits onDisplayChange={handleDisplayChange}/>
           </div>
        </div>
    );
}

export default Calculator;