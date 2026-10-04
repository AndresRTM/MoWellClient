import { useState, useEffect } from 'react';
import { getHealthLogs, deleteHealthLog } from '../services/HealthLogService';
const typeNames = ["Sleep", "Mood", "Stress", "Activity"];

export default function Overview() {
    const [healthLogs, setHealthLogs] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchHealthLogs = async () => {
            try {
                const logs = await getHealthLogs();
                setHealthLogs(logs);
            } catch {
                setError("Failed to fetch health logs, please try again");
            }
        };
        fetchHealthLogs();
    }, []);

    const handleDelete = async (id) => {
        try {
            await deleteHealthLog(id);
            setHealthLogs((previousLogs) => previousLogs.filter((log) => log.id !== id));
        } catch {
            setError("Could not delete the log");
        }
    };

    return (
        <div>
            <h1>Health Logs Overview</h1>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <ul>
                {healthLogs.map((log) => (
                    <li key={log.id}>
                        <strong>Type:</strong> {typeNames[log.type]} | <strong> Rating:</strong> {log.ratingScore} |
                        <strong> Date:</strong> {new Date(log.dateTime).toLocaleString()}
                        <button onClick={() => handleDelete(log.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}