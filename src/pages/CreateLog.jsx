import { useState } from 'react';
import { useNavigate } from 'react-router';
import { createHealthLog } from '../services/HealthLogService';

const nowForInput = () => {
    const now = new Date();
    const offset = now.getTimezoneOffset() * 60000;
    return new Date(now - offset).toISOString().slice(0, 16);
};

export default function CreateLog() {
    const [type, setType] = useState("");
    const [ratingScore, setRatingScore] = useState("");
    const [dateTime, setDateTime] = useState(nowForInput());
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError("");

        const healthLog = {
            type: Number(type),
            ratingScore: Number(ratingScore),
            dateTime: new Date(dateTime).toISOString()
        };

        try {
            await createHealthLog(healthLog);
            await checkAuthentication();
            navigate('/home');
        } catch {
            setError("Failed to create health log, please try again");
        }
    };


return (
        <div>
            <h1>Log how you feel</h1>

            <form onSubmit={handleSubmit}>

                <label htmlFor="type">Category:</label>
                <select
                    id="type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    required
                >
                    <option value="">Choose a category</option>
                    <option value="0">Sleep</option>
                    <option value="1">Mood</option>
                    <option value="2">Stress</option>
                    <option value="3">Activity</option>
                </select>

                <label htmlFor="ratingScore">Rating (0–5):</label>
                <input
                    id="ratingScore"
                    type="number"
                    value={ratingScore}
                    onChange={(e) => setRatingScore(e.target.value)}
                    min={0}
                    max={5}
                    required
                />

                <label htmlFor="dateTime">When did this happen?</label>
                <input
                    id="dateTime"
                    type="datetime-local"
                    value={dateTime}
                    onChange={(e) => setDateTime(e.target.value)}
                    required
                />

                {error && <p style={{ color: "red" }}>{error}</p>}

                <button type="submit">Save</button>
            </form>
        </div>
    );
}