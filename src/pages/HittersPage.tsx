import React, { useState } from 'react';
import axios from 'axios';

const HittersPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [hitter, setHitter] = useState(null);
    const [error, setError] = useState(null);

    // Handle search functionality
    const handleSearch = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        if (searchTerm.trim() === '') {
            setHitter(null);
            setError('Please enter a player name.');
            return;
        }

        try {
            // Fetch hitter by name
            const response = await axios.get(`http://localhost:8080/api/hitters/${encodeURIComponent(searchTerm)}`);
            setHitter(response.data); // Set the fetched hitter data
            setError(null); // Clear any previous errors
        } catch (err) {
            console.error(err);
            setHitter(null); // Clear previous hitter data
            setError('Player not found.'); // Display error if the player isn't found
        }
    };

    return (
        <div className="content">
            <h1>Hitters</h1>

            {/* Search Bar with Enter Button */}
            <form onSubmit={handleSearch} className="search-container">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search hitters by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="search-button">Enter</button>
            </form>

            {/* Display Results */}
            {error && <p className="error">{error}</p>}
            {hitter && (
                <div className="player-info">
                    <h2>{hitter.player_name}</h2>
                    <ul>
                        {Object.entries(hitter).map(([key, value]) => (
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

export default HittersPage;
