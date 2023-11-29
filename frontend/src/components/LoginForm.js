import React, { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        if(!username || !password){
            alert("Minden mezőt ki kell tölteni!");
            return;
        }
    };

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
        </div>
    );
};
export default LoginForm;