import React, {useState} from 'react';
import Digits from './Digits';

function Calculator(props) {
    const [display, setDisplay] = useState('');

    const handleClick = (value) => {
        setDisplay(value);
        console.log(value);
    };

    return (
        <div className='calculator'>
           <h2>My calculator</h2>
           <div className='output'>
             <p>{displayValue}</p>
           </div>
           <div id='digits-panel'>
             <Digits/>
           </div>
        </div>
    );
}

export default Calculator;