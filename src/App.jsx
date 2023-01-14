import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


function App() {

  const [fullname, setFullName] = useState({
    'fname': '',
    'lname': ''
  });
   const myFunction = (event) => {
     const value = event.target.value;
     const name = event.target.name;
    
     setFullName((preValue) => {
      if(name === 'firstname'){
        return {
          fname : value,
          lname : preValue.lname 
        }
      }
        else{
          if(name === 'lastname'){
            return {
              fname : preValue.fname,
              lname : value 
            }
          } 
        }
     })
    }
    const FormSubmit = (event) => {
      event.preventDefault();
      var res = confirm("Press ok for Confirm!");
      if(res == true)
      {
        alert("Your Form is submitted succesfully");
      }  
    }

  return (
    <div className="App">
    <h3>Hii {fullname.fname} {fullname.lname}</h3>
    <form onSubmit = { FormSubmit } >
      <label>Enter FirstName : </label>
      <input type="text" name="firstname" onChange={ myFunction }></input><br></br><br></br>
      <label>Enter Lastname : </label>
      <input type="text" name="lastname" onChange={ myFunction }></input><br></br><br></br>
      <button type="submit" id ="submit">submit</button>
    </form>
    </div>
  )
}

export default App
