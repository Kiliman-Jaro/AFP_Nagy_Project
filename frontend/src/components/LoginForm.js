import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        if(!username || !password){
            alert("All fields must be filled in!");
            return;
        }
        axios.post("http://localhost:5000/login", {
            username: username,
            password: password,
        }).then((response) => {
            if(response.status === 200){
                navigate("/home");
            }
            else{
                alert("Login failed!");
                setUsername("");
                setPassword("");
            }
        });
    };
    function register() {
        navigate("/register")
      } 
    return (
        <div className="login-form">
            <h1>Login</h1>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
            <button onClick={register}>Sign up</button>
        </div>
    );
};
export default LoginForm;