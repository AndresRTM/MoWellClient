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
            navigate("/");
        } catch {
            setError("Fel e-postadress eller lösenord");
        }
    };

    return (
        <div>
            <h1>Välkommen till MoWell</h1>
            <h2>Logga in</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-post"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Lösenord"
                    required
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
                <button type="submit">Logga in</button>
            </form>
        </div>
    );
}


