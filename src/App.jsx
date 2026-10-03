import { Routes, Route } from 'react-router';
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'
import HomePage from './pages/Home'
import CreateLogPage from './pages/Createlog'
import OverviewPage from './pages/Overview'
import './App.css'
import Layout from './components/Layout';



function App() {

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/create" element={<CreateLogPage />} />
        <Route path="/overview" element={<OverviewPage />} />
      </Route>
    </Routes>
  )
}

export default App
