import { useState } from 'react';
import Counter from './components/Counter';
import ReportButton from './components/RepportButton';
import Student from './components/Student';

function App() {
  const [ name ] = useState('zy')
  const [ showCount, setShow ] =useState(false)

  const handleShow = () => {
    setShow( !showCount)
  }
  // const onClick = () => {
  //   console.log('app')
  //   setName((prev)=> { prev = 'li li'})
  // }
  return (
  <div>
    {
      showCount ?  <Counter></Counter> : null
    }
    <ReportButton name={name} />
    <button onClick={ handleShow }>组件修改</button>
    <div>
    Student: <Student></Student>
    </div>
  </div>

  );
}

export default App;
