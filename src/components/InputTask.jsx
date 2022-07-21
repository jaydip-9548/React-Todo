import React,{useState} from 'react'
import TaskList from './TaskList'

export default function InputTask({addTask}) {
  const[title,setTitle] = useState("")
  
  
  function handleChange(event){
    setTitle(()=>{
      return (event.target.value)
    })
  }

  function Add(event)
  { 
    event.preventDefault()
    
    let new_todo = {
        "title": title
    }
    addTask(new_todo)
    setTitle((title)=>{return ""})
    
  }



  return (
    <div className='data-input'>

        <form action="">
            <input type="text"
            onChange={handleChange}
            value = {title}
            placeholder = "Task Name"
            />
            <button onClick={Add}>Add</button>
        </form>
     
    </div>
  )
}
