import React from "react";
import './Login.css'

function Login() {
    return (
        <div class="frame">
            <div className="Login">
                <form action="">
                    <h2>Login</h2>
                    <label for="">username</label>
                    <input type="text" />
                    <label for="">password</label>
                    <input type="password" />
                    <button>Submit</button>
                    <a href="../src/components/signup/Signup">Clik here to register</a>
                </form>
            </div>
        </div>
    );
}
export default Login;
