// Code Keypad Component Here
import React from "react";

function Keypad (){
    return (
        <div>
            <label>Password:
            <input type="password" onChange={e => console.log("Entering password...")} />
            </label>
        </div>
    )
}

export default Keypad;