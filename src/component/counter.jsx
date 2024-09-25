import React, {useState} from 'react';

const Counter = function(){
  const [ count, setCount] = useState(0)
  function increment(){
    setCount( count +1)
  }


  return(
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setCount(count -1)}>Decrement</button>
    </div>
  )
}

export default Counter;

/*const state = useState(0)
const count = state[0]
const setCount = state[1]

const a = {
  b:1
};
console.log(a.b)*/