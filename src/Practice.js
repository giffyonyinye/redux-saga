import React from "react";
import Guess from "./Guess";
import { useState } from "react";
const Practice= () => {
    const [details, setDetails] = useState({
        firstName: "",
        lastName: "",
      });
      // const [details, setDetails] = useState('giffy');
       const [newText, setNewText] = useState("Are you up to 18?");
       const [show, setShow] = useState(false);
    
      const handleChange =  (e) => {
        return setDetails({...details, [e.target.name] : e.target.value});
      }
      const handleSubmit = (e) => {
        e.preventDefault()
        setShow(true)
      }
    
      const guess = () => {
        alert("Yes, I guessed right")
        return "yes, I guessed right"
      }
    
      return (
        <div className="App">
          <form onSubmit={handleSubmit}>
              <div>
                <input value={details.firstName} type="text" name="firstName" id="firstName" onChange = {handleChange} /><br/>
                <input value={details.lastName} type="text" name="lastName" id="lastName" onChange = {handleChange} />
              </div>
              <button type="submit" >Submit</button>
          </form>
    
            {
    
               show &&
                <div>
                  <p>Welcome {details.firstName} {details.lastName}</p>
                </div>
            }
          <div>
            <p >{newText}</p>
            <div>
              <button onClick={() => setNewText( "You are old enough to join this channel")}>YES</button>
              <button  onClick={() => setNewText("You are too young to join this channel")}>NO</button>
            </div>
          </div>
          <Guess name="Giffy" age={21} guess={guess} firstName={details.firstName}/>
          
        </div>
      );
    }    

export default Practice