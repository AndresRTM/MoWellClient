import { NavLink } from "react-router-dom"

export default function Navbar() {
    return (
        <header>
            <nav>
                <ul>
                    <li><NavLink to="/Dashboard" end>Overview</NavLink></li>
                    <li><NavLink to="/Create">Create log</NavLink></li>
                    <li><NavLink to="/Logout">Logout</NavLink></li>           
                </ul>
            </nav>
        </header>
    )
}