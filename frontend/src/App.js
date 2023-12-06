import logo from './logo.svg';
import './App.css';
import RegisterForm from './components/RegisterForm.js';
import LoginForm from './components/LoginForm.js';
import Home from './components/Home.js';
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
               < Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
