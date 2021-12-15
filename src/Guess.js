import React from 'react'
function Guess(props) {
    return (
        <div style={{marginTop:"10rem"}}>
            <p>Your name is {props.name}, and you are {props.age} years old.</p>
            <p>{props.firstName}</p>
            <p>If this is true click <a href="#" onClick={props.guess}>here</a></p>
        </div>
    )
}
export default Guess;