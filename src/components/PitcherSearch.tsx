import React, { useState } from "react";
import { getPitcherByName } from "../api/pitchersService";

const PitcherSearch: React.FC = () => {
    const [playerName, setPlayerName] = useState("");
    const [pitcherStats, setPitcherStats] = useState<any | null>(null);
    const [error, setError] = useState("");

    const handleSearch = async () => {
        setError(""); // Clear previous errors
        try {
            const stats = await getPitcherByName(playerName);
            setPitcherStats(stats);
        } catch (err) {
            setPitcherStats(null);
            setError("Player not found or an error occurred.");
        }
    };

    return (
        <div>
            <h1>Search for a Pitcher</h1>
            <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Enter player name (e.g., R Johnson)"
            />
            <button onClick={handleSearch}>Search</button>

            {error && <p style={{ color: "red" }}>{error}</p>}

            {pitcherStats && (
                <div>
                    <h2>Stats for {pitcherStats.playerName}</h2>
                    <p>Games: {pitcherStats.games}</p>
                    <p>Wins: {pitcherStats.wins}</p>
                    <p>Losses: {pitcherStats.losses}</p>
                    <p>ERA: {pitcherStats.era}</p>
                    {/* Add more stats as needed */}
                </div>
            )}
        </div>
    );
};

export default PitcherSearch;
