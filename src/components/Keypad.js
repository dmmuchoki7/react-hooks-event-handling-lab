// Code Keypad Component Here
import React from 'react'
function handleEvent(e){
    console.log(`${e.target.value}`)
}
function Keypad (){
    return (
        <div>
            <input
            type="password"
            name="password"
            onChange={handleEvent}
            placeholder="Enter password..."/>
        </div>
    )
}

export default Keypad;