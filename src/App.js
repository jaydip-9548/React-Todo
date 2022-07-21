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
    console.log("delete")
    Todos.splice(key,key)
   setTodos(Todos)
   console.log("Completes")
   }
  const element = Todos.map((item,index)=>{
    console.log(index)
    return(
      <TaskList key={index} id={index} title={item.title} deleteItem={deleteItem} />
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
