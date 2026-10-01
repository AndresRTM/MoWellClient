import { Routes, Route } from 'react-router';
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import HomePage from './pages/Home'
import './App.css'

function App() { 

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
  )
}

export default App
