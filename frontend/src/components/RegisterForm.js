import React, {useState} from "react";
import axios from "axios";
import{useNavigate} from "react-router-dom";

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");   
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const validateEmail = (email) => {
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

    const validatePassword = (password) => {
        
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;
        return passwordRegex.test(password);
      };
    const handleRegister = () => {
        if(!username || !password || !email) {
            alert("All fields must be filled in!");
            return;
        }

        if(!validateEmail(email)) {
            alert("Invalid email format!");
            return;
        }

        if (!validatePassword(password)) {
            alert("Password must contain at least one uppercase letter and one digit!");
            return;
          }
          
        axios.post("http://localhost:5000/register", {
            username: username,
            password: password,
            email: email,
        }).then((response) => {
            if(response.status === 200) {
                navigate("/login");
            }
            else{
                alert("Registration failed!");
                setUsername("");
                setPassword("");
                setEmail("");
            }
        });
    };
    return (
        <div className="registration-form">
            <h1>Registration</h1>
            <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
            <button onClick={handleRegister}>Registration</button>
            <button onClick={() => navigate("/login")}>Cancel</button>
        </div> 
    );
};
export default RegisterForm;