import React, { useState } from "react";
// import {NavLink} from 'react-router-dom';
import './Login.css';
// import {useNavigate} from 'react-router-dom';
const Signup = () => {

    // const history=useNavigate()
    const[user,setUser]= useState({
        username:"",
        email:"",
        password:""
    });
    // const [isTeacher, setIsTeacher] = React.useState(true);
    // const [subjects, setSubjects] = React.useState([]);

    const handleInput = (event) => {
        let name=event.target.name;
        let value=event.target.value;
        setUser({...user,[name]:value})
    };

    const handleSubmit = async(event) => {
        event.preventDefault();
        const {username,email,password}=user;
        try {
            const res=await fetch('/signup',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    username,email,password
                })
            })

            if(res.status===400 || !res){
                window.alert("Already used Details")
            }else{
                window.alert("Registerd successfully")
                // history.pushState('./login')
            }
        } catch (error) {
            console.log(error)
        }
    };

    // const handleCheckboxChange = (event) => {
    //     const subject = event.target.value;
    //     if (subjects.includes(subject)) {
    //         setSubjects(subjects.filter(s => s !== subject));
    //     } else {
    //         setSubjects([...subjects, subject]);
    //     }
    // };

    return (
        <div className="login-page">
            <div className="login-box">
                <h2>Signup</h2>
                <form onSubmit={handleSubmit} method="POST">
                    <div className="user-box">
                        <input type="text"
                            id="name" 
                            name="username"
                            required="true"
                            value={user.username}
                            onChange={handleInput}
                              />
                        <label>Username</label>
                    </div>
                    <div className="user-box">
                        <input type="email" 
                            id="useremail"
                            name="email"
                            required="true"
                            value={user.email}
                            onChange={handleInput}
                              />
                        <label>Email</label>
                    </div>
                    <div className="user-box">
                        <input type="password"
                            id="userpassword"
                            required="true"
                            name="password"
                            value={user.password}
                            onChange={handleInput}
                             />
                        <label>Password</label>
                    </div>
                    {/* <div className="user-box">
                        <input type="checkbox" name="" checked={isTeacher} onChange={() => setIsTeacher(!isTeacher)} />
                        <label>Are you a Teacher?</label>
                    </div>
                    {
                        isTeacher && (
                            <div className="user-box">
                                <div className="checkbox-group">
                                    <input type="checkbox" name="subjects[]" value="Chemistry" checked={subjects.includes("Chemistry")} onChange={handleCheckboxChange} />
                                    Chemistry
                                    <input type="checkbox" name="subjects[]" value="Biology" checked={subjects.includes("Biology")} onChange={handleCheckboxChange} />
                                    Biology
                                    <input type="checkbox" name="subjects[]" value="Astronomy" checked={subjects.includes("Astronomy")} onChange={handleCheckboxChange} />
                                    Astronomy
                                </div>
                            </div>
                        )
                    } */}
                    <a href="#">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Submit
                    </a>
                    <a href="./Login">Login</a>
                </form>
            </div>
        </div>
    );
}

export default Signup;
