import React, {useState} from 'react';

function Calculator(props) {
    const [display, setDisplay] = useState('');

    const handleClick = (value) => {
        setDisplay(value);
        console.log(value);
    };

    return (
        <div className='buttons'>
            <button className='button-0' onClick={() => handleClick('0')}>0</button>
            <button className='button-1' onClick={() => handleClick('1')}>1</button>
            <button className='button-2' onClick={() => handleClick('2')}>2</button>
            <button className='button-3' onClick={() => handleClick('3')}>3</button>
            <button className='button-4' onClick={() => handleClick('4')}>4</button>
            <button className='button-5' onClick={() => handleClick('5')}>5</button>
            <button className='button-6' onClick={() => handleClick('6')}>6</button>
            <button className='button-7' onClick={() => handleClick('7')}>7</button>
            <button className='button-8' onClick={() => handleClick('8')}>8</button>
            <button className='button-9' onClick={() => handleClick('9')}>9</button>
            <button className='button-7' onClick={() => handleClick('+')}>+</button>
            <button className='button-7' onClick={() => handleClick('-')}>-</button>
            <button className='button-7' onClick={() => handleClick('*')}>*</button>
            <button className='button-7' onClick={() => handleClick('/')}>/</button>
            <button className='button-7' onClick={() => handleClick('=')}>=</button>
            <button className='button-7' onClick={() => handleClick('c')}>c</button>
        </div>
    );
}

export default Calculator;