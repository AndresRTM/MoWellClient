import { Routes, Route } from 'react-router';
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import HomePage from './pages/Home'
import CreateLogPage from './pages/Createlog'
import './App.css'

function App() { 

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/create" element={<CreateLogPage />} />
    </Routes>
  )
}

export default App
