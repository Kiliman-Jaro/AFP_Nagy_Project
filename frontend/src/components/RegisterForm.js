import React, {useState} from "react";

const RegisterForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");   
    const [email, setEmail] = useState("");

    const handleRegister = () => {
        if(!username || !password || !email) {
            alert("Minden mező kitöltése kötelező!");
            return;
        }
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