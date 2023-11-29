import logo from './logo.svg';
import './App.css';
import RegisterForm from './components/RegisterForm.js';
import LoginForm from './components/LoginForm.js';
import { BrowserRouter, Route, Routes } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginForm />} />
                <Route path="/register" element={<RegisterForm />} />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
