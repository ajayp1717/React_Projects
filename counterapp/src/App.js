
import './App.css';
import { useState } from 'react';

const App=()=> {
  const [counter,setCounter]=useState(0);
  
  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(prevCount => prevCount - 1);
    }
  };

  const incrementCounter = () => {
    setCounter(prevCount => prevCount + 1);
  };

  return (
    <div className="App">
      <div className="container text-center">
        <h1 className="mb-4">Keep Count of Things!</h1>
        <div className="btn-group">
          <button className="btn btn-primary col-2" onClick={decrementCounter}>-</button>
          <h2 className="counter col-1">{counter}</h2>
          <button className="btn btn-primary col-2" onClick={incrementCounter}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
