import React from "react";
import './Login.css';
const Login = () => {
    return (
        <div class="login-page">
            <div class="login-box">
                <h2>Login</h2>
                <form>
                    <div class="user-box">
                        <input type="text" name="" required="" />
                        <label>Username</label>
                    </div>
                    <div class="user-box">
                        <input type="password" name="" required="" />
                        <label>Password</label>
                    </div>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                    <a href="./Signup">Signup</a>
                </form>
            </div>
        </div>
    );
}

export default Login;