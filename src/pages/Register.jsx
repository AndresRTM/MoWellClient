import { useState } from 'react';
import { useNavigate } from 'react-router';
import { loginWithCookie, registerUser } from '../services/authService';
import { Link } from 'react-router';

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        try {
            await registerUser(email, password);           
            navigate("/create");
        } catch (err) {
            const errors = err.response?.data?.errors;

            if (errors) {
                setError(Object.values(errors).flat().join(" "));
            } else {
                setError("Registration failed, please try again");
            }
        }
    };

    return (
        <div>
            <h1>Welcome to MoWell</h1>
            <h2>Register here</h2>
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
                <button type="submit">Register</button>
            </form>
            <Link to="/">Already have an account? Log in</Link>
        </div>
    );
}
