import React from "react";
import Login from "../login/Login";
import Signup from "../signup/Signup";


function Usermangement(){
    const change = 0
    if (change) {
        return(
            <Login />
        )
        
    } else {
        return(
            <Signup />
        )
        
    }
}

export default Usermangement;