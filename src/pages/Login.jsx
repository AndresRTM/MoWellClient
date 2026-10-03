import { useState } from 'react';
import { useNavigate } from 'react-router';
import { loginWithCookie } from '../services/authService';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        try {
            await loginWithCookie(email, password);
            navigate("/create");
        } catch {
            setError("Wrong email or password");
        }
    };

    return (
        <div>
            <h1>Welcome to MoWell</h1>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address, e.g. user@example.com"
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">Login</button>
                <button type="submit" onClick={() => navigate("/register")}>
                    Register                
                </button>
            </form>
        </div>
    );
}


