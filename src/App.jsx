import React,{useState} from 'react'
import "./App.css"
function App() {
  const[val,setVal]= useState("")
  const[state,setState]= useState([])
  const[change,setChange] = useState()
  console.log(change,"9")
  const handleClick=()=>{
    setState([...state,val])
  }
  const handleChange=(id,clr)=>{
    console.log(id,clr)
    setChange(clr)

  }
  return (
    <div style={{ background: change ,height:"100vh"}}>
      <h4>click me</h4>
      <input type="color" value={val} onChange={(e) =>setVal(e.target.value)} onClick={handleClick}/>
      <div style={{ display: "flex",width:"1500px",flexWrap:"wrap" }}>
      {
        state.map((item,index)=>
          {
            return(<div  >
              <h1 style={{ background: item,width:"100px",height:"100px",marginRight:"10px" }} onClick={()=>handleChange(index,item)}></h1>
              <h4>click me</h4>

            </div>)
          })
      }
      </div>
    </div>
  )
}

export default App
