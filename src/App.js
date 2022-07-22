import './App.less'
import InputTask from './components/InputTask';
import TaskList from './components/TaskList';
import React,{useState,useEffect} from 'react';


function App() {
  const[Todos,setTodos] = useState([])
  

  const addTask = (todo)=>{
    setTodos(oldtodo => [...oldtodo,todo])
  }

  const deleteItem = (key)=>{
   
      const removeItem = Todos.filter((todo,index)=>{
      
      return index !== parseInt(key)
    })
    setTodos(removeItem)
   }

   const updateItem = (event,newTitle)=>{
    event.preventDefault()

    let id = parseInt(event.target.id)
    let pp = [...Todos]
    pp[id].title = newTitle
    
    setTodos(pp)
    
   }

  const element = Todos.map((item,index)=>{
    return(
      <TaskList key={index} id={index} title={item.title} deleteItem={deleteItem} updateItem={updateItem}/>
    )
   })
  
  

  
  return (
    <div className="App">
      <h1>Todo App</h1>
       <InputTask addTask={addTask} />
       {element}
    </div>
  );
}

export default App;
