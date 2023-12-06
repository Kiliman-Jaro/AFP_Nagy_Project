import React, {useState} from "react";
import axios from "axios";
import{useNavigate} from "react-router-dom";

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");   
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    
    const handleRegister = () => {
        if(!username || !password || !email) {
            alert("Minden mező kitöltése kötelező!");
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
                alert("Sikerestelen regisztráció");
                setUsername("");
                setPassword("");
                setEmail("");
            }
        });
    };
    return (
        <div>
            <h1>Regisztráció</h1>
            <input type="text" placeholder="Felhasználónév" value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="Jelszó" value={password} onChange={e => setPassword(e.target.value)} />
            <input type="email" placeholder="E-mail cím" value={email} onChange={e => setEmail(e.target.value)} />
            <button onClick={handleRegister}>Regisztráció</button>
        </div>
    );
};
export default RegisterForm;