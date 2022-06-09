import React, {useState} from "react";
import './Signup.css'
import Login from "../login/Login";
import axios from "axios";

function Signup() {

    const [userName, userNameNew] = useState();
    const [eMail, eMailNew] = useState();
    const [mobileNo, mobileNoNew] = useState();
    const [passWord, passWordNew] = useState();

    const newUserDetails = ()=>{
        
        axios.post("http://localhost:8000/api/users/register", {userName, eMail, mobileNo, passWord})
             .then((Response)=>{console.log(Response)})
             .catch((error)=>{console.log(error)})
             console.log("newUserDetails");
    }
    return (
        <div class="frame">

            <form>
                
                <h3>Signup</h3>
            
                <label for="userName">userName</label>
                <input type="text" name="userName" onChange={(details)=>userNameNew(details.target.value)} />
                <label for="eMail">eMail</label>
                <input type="eMail" name="eMail" onChange={(details)=>eMailNew(details.target.value)} />
                <label for="mobileNo">mobileNo</label>
                <input type="number" name="mobileNo" onChange={(details)=>mobileNoNew(details.target.value)} />
                <label for="passWord">passWord</label>
                <input type="passWord" name="passWord" onChange={(details)=>passWordNew(details.target.value)} />
                <div class="btn_signup">
                    <button type="button" onClick={newUserDetails}>Submit</button> 
                </div>
                             

                <a href="#" onClick={<Login/>}>Clik here to Login</a>      
             
            </form>
        </div>
    );
}
export default Signup;
