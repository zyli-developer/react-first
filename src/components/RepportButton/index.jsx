export default function ReportButton() {
  const handleClick = () =>{
    console.log('HELLO,WORD');
  }
  return (
    <button onClick={handleClick}>click me</button>
  )
}
