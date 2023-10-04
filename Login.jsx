import React from 'react'
import './Login.css'
import 'animate.css';
export default function Login() {
    return (
        <div class="login-page ">
            <div class="login-box animate_animated animate__bounceInLeft">
                <h2 className='animate_animated animate__rubberBand'>Login</h2>
                <form>
                    <div class="user-box">
                        <input type="text" name="" required=""/>
                            <label>Username</label>
                    </div>
                    <div class="user-box">
                        <input type="password" name="" required=""/>
                            <label>Password</label>
                    </div>
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                </form>
            </div>
        </div>
    )
}
