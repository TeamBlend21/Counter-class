import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  function incrementHandler() {
    setCount(count + 1);
  }

  function decrementHandler() {
    if (count > 0) {
      setCount(count - 1);
    }
   
  }

  return (
    <div className= "counter">
      <button onClick={incrementHandler} className="btn">
        +
      </button>
      <span>{count}</span>
      <button onClick={decrementHandler} className="btn">
        -
      </button>
    </div>
  );
};

export default Counter;