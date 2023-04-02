export default function ReportButton(props) {
  console.log('%c [ props ]-2', 'font-size:13px; background:#db07ac; color:#ff4bf0;', props)
  const handleClick = () =>{
    console.log('HELLO,WORD');
  }
  return (
    <button onClick={handleClick}>click me</button>
  )
}
