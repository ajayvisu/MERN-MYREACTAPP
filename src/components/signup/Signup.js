import React from "react";
import './Signup.css'

function Signup() {
    return (
        <div class="frame">
            <form action="/api/users/register" method="POST">
                
                <h3>Signup</h3>
            
                <label for="username">username</label>
                <input type="text" id="username" />
                <label for="email">eMail</label>
                <input type="email" id="email" />
                <label for="mobileNo">mobileNo</label>
                <input type="number" id="mobileNo" />
                <label for="password">Password</label>
                <input type="password" id="password" />

                <button type="button" class="btn btn-success disabled">Submit</button>               
                            
                <a href="">clik here to login</a>
            </form>
        </div>
    );
}
export default Signup;
