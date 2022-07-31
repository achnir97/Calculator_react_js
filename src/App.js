import { useState } from 'react';


function App() {

  const [calc, setCalc] = useState(""); // using the state hook 


  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.']; // for the operator button 

  const updateCalc = value => { //  value is the parameteer in the arrow function 
    /// updateCalc
    if (
      //includes deteremine whether the value is in operator arrray. 
      ops.includes(value) && calc === '' ||
      // slice methods returns a shallow compy a protion of an array into a 
      // new arrya object selected from start to end (end not included)
      // the original array will not be identified. 
      ops.includes(value) && ops.includes(calc.slice(-1)
      )
    ) {
      return;
    }
    setCalc(calc + value);
    // setCalc will update the value of the calc 
    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
    // SetResult will automatically update the value of result  

  }
  // to create the button for the digits 
  const createDigits = () => {
    const digits = []; // store the array elements 
    for (let i = 1; i < 10; i++) {
      digits.push( // push method append to 
        <button onClick={() => updateCalc(i.toString())} key={i}> {i}</button>
      )
    }
    return digits;
  }
  // eval function evaluates the JavaScript code representd as string and returns
  // its value
  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
    if (calc == '') {
      return;
    }
    const value = calc.slice(0, -1); // assign the elements of the calc to the value. 
    setCalc(value) // updates calc with value
  }

  return (
    <div className="App">

      <div className="calculator">

        <div className='display'>
          {result ? <span>({result})</span> : ''}
          &nbsp;
          {/* if the result is there, it will be displayed in the 
            display section of the calculator  */}
          {calc || "0"}

        </div>



        <div className='operators'>
          {/* // update function will operate its functionality based on the button pressed clicked 
          */}
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>* </button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>
          <button onClick={deleteLast}>DEL</button>
        </div>

        <div className="digits">

          {createDigits()}

          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>


        </div>

      </div>
    </div>
  );
}

export default App;


// when an element type start with a lowercase letter, it refers to a bult in component 

