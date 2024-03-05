import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1)
    
  }
  return (
    <button onClick={increment}>As you click there is an increment of a number{count}</button>
  )
}
export default Counter
