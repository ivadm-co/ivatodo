import './Summer.css'
import {useRef} from 'react';
const Adder = () => {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);

function add(e) {
    if(inputRef1 && inputRef1.current) {
      var sum = 
        Number(inputRef1.current.value) + 
        Number(inputRef2.current.value);
    
      document.getElementById('results').textContent= sum;
    }
}

function sub(e) {
  if(inputRef1 && inputRef1.current) {
    var difference = 
      Number(inputRef1.current.value) - 
      Number(inputRef2.current.value);
  
    document.getElementById('results').textContent= difference;
  }
}

function mul(e) {
  if(inputRef1 && inputRef1.current) {
    var product = 
      Number(inputRef1.current.value) * 
      Number(inputRef2.current.value);
  
    document.getElementById('results').textContent= product;
  }
}

function div(e) {
  if(inputRef1 && inputRef1.current) {
    var quotient = 
      Number(inputRef1.current.value) / 
      Number(inputRef2.current.value);
  
    document.getElementById('results').textContent= quotient;
  }
}

function pow(e) {
  if (inputRef1 && inputRef1.current) {
    var exponent =
    Number(inputRef1.current.value) **
    Number(inputRef2.current.value);

    document.getElementById('results').textContent= exponent;
  }
}

    return (
    <div>
        <label for="Num1">Number 1: </label>
        <input ref={inputRef1} type="number" id="Num1" name="quantity"></input>
        <br/><br/><br/>

        <label for="Num2">Number 2: </label>
        <input ref={inputRef2} type="number" id="Num2" name="quantity"></input>
        <br/><br/><br/>

        <button onClick={add} >+</button> <br/><br/>
        <button onClick={sub}>-</button> <br/><br/>
        <button onClick={mul}>*</button> <br/><br/>
        <button onClick={div}>/</button> <br/><br/>
        <button onClick={pow}>^</button><br/><br/>
        <br/><br/> 

        <div id='results'>Enter both numbers</div>
           
    </div>
    );
  }
  
  export default Adder;
  