import React, { useState } from 'react';
import axios from 'axios';

const TeamsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [teams, setTeams] = useState([]); // Expecting an array of teams
    const [error, setError] = useState(null);

    const handleSearch = async (event) => {
        event.preventDefault();

        if (searchTerm.trim() === '') {
            setTeams([]);
            setError('Please enter a team name.');
            return;
        }

        try {
            // Fetch teams by name
            const response = await axios.get(`http://localhost:8080/api/teams/${encodeURIComponent(searchTerm)}`);
            setTeams(Array.isArray(response.data) ? response.data : [response.data]); // Ensure data is an array
            setError(null); // Clear any previous errors
        } catch (err) {
            console.error(err);
            setTeams([]); // Clear previous data
            setError('Team not found.'); // Display error if no team is found
        }
    };

    return (
        <div className="content">
            <h1>Teams</h1>

            {/* Search Bar */}
            <form onSubmit={handleSearch} className="search-container">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search teams by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit" className="search-button">Enter</button>
            </form>

            {/* Display Results */}
            {error && <p className="error">{error}</p>}
            {teams.length > 0 && (
                <div className="team-info">
                    {teams.map((team, index) => (
                        <div key={index} className="team-card">
                            <h2>{team.teamName}</h2>
                            <ul>
                                {Object.entries(team).map(([key, value]) => (
                                    <li key={key}>
                                        <strong>{key.replace(/_/g, ' ').toUpperCase()}:</strong> {value}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TeamsPage;
