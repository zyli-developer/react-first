import { useState } from "react";

export default function Counter() {

  const [count, setCount] = useState( () => 0)
  const increase = () => { setCount(prev => prev + 1)}
  const decrease = () => {setCount(prev => prev - 1)}
  return (
    <div>
      <button onClick={increase}>+</button>
      <span>{count}</span>
      <button onClick={decrease}>+</button>
    </div>
  )
}
