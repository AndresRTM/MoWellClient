import { Routes, Route } from 'react-router';
import LoginPage from './pages/Login'
import './App.css'

function App() { 

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  )
}

export default App
