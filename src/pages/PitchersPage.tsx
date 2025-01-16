import React, { useState } from 'react';
import axios from 'axios';

const PitchersPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [pitcher, setPitcher] = useState(null);
    const [error, setError] = useState(null);

    // Handle search functionality
    const handleSearch = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        if (searchTerm.trim() === '') {
            setPitcher(null);
            setError('Please enter a player name.');
            return;
        }

        try {
            // Fetch pitcher by name
            const response = await axios.get(`http://localhost:8080/api/pitchers/${encodeURIComponent(searchTerm)}`);
            setPitcher(response.data); // Set the fetched pitcher data
            setError(null); // Clear any previous errors
        } catch (err) {
            console.error(err);
            setPitcher(null); // Clear previous pitcher data
            setError('Player not found.'); // Display error if the player isn't found
        }
    };

    return (
        <div className="content">
            <h1>Pitchers</h1>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="search-container">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search pitchers by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="search-button">Enter</button>
            </form>

            {/* Display Results */}
            {error && <p className="error">{error}</p>}
            {pitcher && (
                <div className="player-info">
                    <h2>{pitcher.player_name}</h2>
                    <ul>
                        {Object.entries(pitcher).map(([key, value]) => (
                            <li key={key}>
                                <strong>{key.replace(/_/g, ' ').toUpperCase()}:</strong> {value}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default PitchersPage;
