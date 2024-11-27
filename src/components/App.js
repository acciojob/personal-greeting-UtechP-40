
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [greetings,handleGreetings] = useState("")
  const handleChange =(e)=>{
    let value = e.target.value 
    handleGreetings(value)
  }
  return (
    <div>
        {/* Do not remove the main div */}
        <input type="text" onChange={handleChange} />
        <p>Hello {greetings}!</p>
    </div>
  )
}

export default App
