import { useEffect, useMemo, useState } from "react";

export default function Stundet () {
  const  [studentList , setStudentList] =useState([{id: 3, name: 'haha', age:3}])
  const getStudent = () => {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        setStudentList((prev)=> {
          return [...prev , {id:1, name: 'li', age: 1}, {id:2, name : 'wang', age: 2}]
        })
        resolve()
      }, 3000)
    })
  }
  useEffect( ()=> {
    getStudent()
  },[])
  const studentNameList = useMemo( ()=> {
    return studentList.map(ele=> ele.name)
  },[studentList])
  return (
    <div>
      <table>
        <th>名称</th>
        <th>年龄</th>
        {
          studentList.map(ele => (
            <tr key={ele.id}>
              <th key={ele.name}>{ele.name}</th>
              <th key={ele.age}>{ele.age}</th>
            </tr>
          ))
          }
      </table>
      <span>name: {studentNameList.map(ele => ( <p>{ele}</p>))}</span>
    </div>
  )
}
