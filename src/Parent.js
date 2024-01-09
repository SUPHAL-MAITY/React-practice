import React from 'react'
import Child from './Child'
import { useState } from 'react'

const Parent = () => {
  const [input,setInput]=useState("")
  const[listitem,setlistItem]=useState([])


  const handleSubmit=(e)=>{
    e.preventDefault()
    setlistItem([...listitem,input])
    setInput("")

  }
  
  const handleChange=(e)=>{
    setInput(e.target.value)

  }
  const handleDelete=(delItem)=>{
    setlistItem(listitem.filter((item)=> item !== delItem))

  }
    
  
 
  
  return (
   <>
   <form onSubmit={handleSubmit}>
   <div>
   <input  type="text"  value={input} onChange={handleChange} placeholder='Enter what You want to add to the list'/>

   </div>
 
   <button type='submit' >Add to List</button>
   <ul>
   {listitem.map((item)=>(
    <li key={item}>{item}<button onClick={()=>handleDelete(item)}>X</button></li>

   )
    
   

   )}
   </ul>


   </form>
   
   
   
   </>
  )
}

export default Parent
