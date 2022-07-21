import React,{useState} from 'react'

export default function InputTask() {
  const[title,setTitle] = useState("")
  const[Todos,setTodos] = useState([])
  
  function handleChange(event){
    setTitle(()=>{
      return (event.target.value)
    })
  }

  function addTask(event)
  { 
    event.preventDefault()
    
    let new_todo = {
        "title": title
    }
    setTodos(oldtodo => [...oldtodo,new_todo])

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
            <button onClick={addTask}>Add</button>

        </form>
      
    </div>
  )
}
