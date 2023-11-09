// Code EyesOnMe Component Here
import React from 'react'
import Keypad from './Keypad'

//click event handler
function handleFocus(){
    console.log("Good!")
}
function handleBlur(){
  console.log("Hey! Eyes on me!")
}

function EyesOnMe() {
  return (
    <div>
        <button onBlur={handleBlur} onFocus={handleFocus}>EyesOnMe</button>
    </div>
  )
}

export default EyesOnMe
