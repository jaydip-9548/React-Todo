import React from 'react'

export default function TaskList(props) {

  return (
    <>

       <div className='container' >
        
      <div className="title">
        {props.title}
      </div>
      <div className='container__button'>
       <button id={props.id} onClick={(event)=>{props.deleteItem(event.target.id)}}>Delete</button>  
       <button>Edit</button>
      </div>
    </div>
    
    

    </>
   
  )
}
