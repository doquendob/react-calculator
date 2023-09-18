import React, {useState} from 'react';

const Digits = ({onDisplayChange}) => {
    const [displayDigit, setDisplayDigit] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
      let newDisplay = displayDigit;

      const isOperator = (val) => /[+\-*\/]/.test(val);
      const endsWithOperator = () => isOperator(newDisplay.charAt(newDisplay.length - 1)); 

      const clearDisplay = () => {
        newDisplay = '';
        setDisplayDigit('');
        onDisplayChange('');
      }

      const handleOperator = () => {
        if(result !== '') {
          newDisplay = result + value;
          setResult('');
        } else if (endsWithOperator()) {
          if(value === '-' && newDisplay.slice(-1) !== '-'){                               
             newDisplay += value;
            if(endsWithOperator() && newDisplay.slice(-2) === '+-') {
               newDisplay = newDisplay.slice(0, -2) + value;
            }
          } else if(value !== '-') {
            if(endsWithOperator() && newDisplay.slice(-2) === '/+' ){
            } else {
               newDisplay = newDisplay.slice(0, -1) + value;
            }
          }
        } else {
          newDisplay += value;
        }
      }
    }

    return (
        <div className="buttons">
            <button className="digit-0" onClick={() => handleClick('0')}>0</button>
            <button className="digit-1" onClick={() => handleClick('1')}>1</button>
            <button className="digit-2" onClick={() => handleClick('2')}>2</button>
            <button className="digit-3" onClick={() => handleClick('3')}>3</button>
            <button className="digit-4" onClick={() => handleClick('4')}>4</button>
            <button className="digit-5" onClick={() => handleClick('5')}>5</button>
            <button className="digit-6" onClick={() => handleClick('6')}>6</button>
            <button className="digit-7" onClick={() => handleClick('7')}>7</button>
            <button className="digit-8" onClick={() => handleClick('8')}>8</button>
            <button className="digit-9" onClick={() => handleClick('9')}>9</button>
            <button className="op-add" onClick={() => handleClick('+')}>+</button>
            <button className="op-sub" onClick={() => handleClick('-')}>-</button>
            <button className="op-mul" onClick={() => handleClick('*')}>*</button>
            <button className="op-div" onClick={() => handleClick('/')}>/</button>
            <button className="eq" onClick={() => handleClick('=')}>=</button>
            <button className="clear" onClick={() => handleClick('c')}>c</button>
        </div>
    );
}

export default Digits;