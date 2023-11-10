
import 'bootstrap/dist/css/bootstrap.css'
import { useState } from 'react'
import './App.css'
import axios from 'axios'
 let nextid=0
function App(){
 
  const [mylist, setMyList]=useState([])
  const[ myitem ,setMyItem]=useState('')
  const additem=()=>{
    setMyList(
      [...mylist,{id:nextid++ , itemName:myitem}])
  }
  console.log(mylist)
  const deletitem=(id)=>{
    setMyList(mylist.filter((a)=> a.id!=id))

  }
  
  return (
    <>
    <h3 className='H'>MY LIST 🌼:</h3>
    <input className='in' type='text' value={myitem} onChange={(e)=> setMyItem(e.target.value)}/><br/>
    <button className='bt' onClick={additem}  >Add item</button>

      {mylist.map((x)=>
      
      
      <ul className='p'key={x.id}> 
      <li> {x.itemName}    <button onClick={()=>deletitem(x.id)} className='btn btn-lnfo'>Delet</button></li>
       </ul>)}
    </>
  )
}

export default App
