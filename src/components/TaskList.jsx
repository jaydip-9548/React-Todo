import React from 'react'

export default function TaskList(props) {
 const [isEdite,setIsEdite] = React.useState(false)
 const [newTitle,setNewTitle] = React.useState("")
 
 function editeTitle(event){
  setNewTitle(event.target.value)
 }
 function editeItem(key){
  setIsEdite(true)
 }

 
  return (
    <>
       <div className='container' >
        
      <div className="title">
        {props.title}
      </div>
      {/* <div className='container__button'> */}
       <button id={props.id} onClick={(event)=>{props.deleteItem(event.target.id)}}>Delete</button>  
       <button id={props.id} onClick={(event)=>{editeItem(event.target.id)}}>Edit</button>
       {/* <button id={props.id} onClick={(event)=>{props.editeItem(event.target.id)}}>Edit</button> */}
      {/* </div> */}
     
    </div>
    <div className={isEdite ? "edite":"notediting"} >
        <form>
 
          <input type="text"
                  onChange={editeTitle}
                  value = {isEdite ? newTitle : props.title}
          />
        <br />
           <button type='submit' id={props.id} onClick={(event)=>{props.updateItem(event,newTitle); setIsEdite(false)}}>Update</button>
        </form>

      </div>
    

    </>
   
  )
}
