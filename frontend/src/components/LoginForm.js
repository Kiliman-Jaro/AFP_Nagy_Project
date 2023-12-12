import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        if(!username || !password){
            alert("Minden mezőt ki kell tölteni!");
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
                alert("Sikertelen bejelentkezés!");
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
            <input
                type="text"
                placeholder="Felhasználónév"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                type="password"
                placeholder="Jelszó"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Bejelentkezés</button>
            <button onClick={register}>Regisztráció</button>
        </div>
    );
};
export default LoginForm;