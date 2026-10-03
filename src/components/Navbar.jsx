import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/overview" end>Overview</NavLink></li>
                    <li><NavLink to="/create" end>Create log</NavLink></li>
                    <li><NavLink to="/logout" end>Logout</NavLink></li>           
                </ul>
            </nav>
        </header>
    )
}