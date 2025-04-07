import React, { useState } from 'react';

function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const calculate = () => {
    try {
      // Evaluate the expression
      setResult(eval(input)); // Note: eval() should be used carefully for security reasons.
    } catch (error) {
      alert('Invalid expression');
    }
  };

  return (
    <div style={{ margin: '20px' }}>
      <h1>React Calculator</h1>
      <input
        type="text"
        placeholder="Enter expression (e.g., 2+2)"
        value={input}
        onChange={handleInput}
        style={{ width: '300px', padding: '10px' }}
      />
      <br />
      <button onClick={calculate} style={{ margin: '10px', padding: '10px' }}>
        Calculate
      </button>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default Calculator;
