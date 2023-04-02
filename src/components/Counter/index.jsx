import { useState, useEffect  } from "react";

export default function Counter() {

  console.log('%c [ 加载了组件 ]-5', 'font-size:13px; background:#438d6f; color:#87d1b3;', )
  const [count, setCount] = useState( () => 0)
  const increase = () => { setCount(prev => prev + 1)}
  const decrease = () => {setCount(prev => prev - 1)}
  const scroll = () => {
    console.log('屏幕滚动了')
  }
  useEffect ( () => {
    document.addEventListener('mousedown', scroll)

    console.log('124');
    return () => {
      document.removeEventListener('mousedown', scroll)
    }
  }, [])
  return (
    <div>
      <button onClick={increase}>+</button>
      <span> cont:{count}</span>
      <button onClick={decrease}>+</button>
    </div>
  )
}
