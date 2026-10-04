import { NavLink, useNavigate } from "react-router"
import { logout } from "../services/authService"

export default function Navbar() {
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await logout()
        } catch {
            console.error("Logout failed")
        }
        navigate("/")
    }

    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/overview">Overview</NavLink></li>
                    <li><NavLink to="/create">Create log</NavLink></li>
                    <li><button onClick={handleLogout}>Logout</button></li>
                </ul>
            </nav>
        </header>
    )
}