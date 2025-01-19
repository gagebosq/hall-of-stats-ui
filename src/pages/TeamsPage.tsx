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
            const fetchedTeams = Array.isArray(response.data) ? response.data : [response.data]; // Ensure data is an array

            // Sort the data by YEAR in descending order
            fetchedTeams.sort((a, b) => b.year - a.year);

            setTeams(fetchedTeams); // Update the sorted data in state
            setError(null); // Clear any previous errors
        } catch (err) {
            console.error(err);
            setTeams([]); // Clear previous data
            setError('Team not found.'); // Display error if no team is found
        }
    };

    return (
        <div className="content">
            {/* Title and Search Section */}
            <div className="table-header">
                <h1>Teams</h1>
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
            </div>

            {/* Display Results */}
            {error && <p className="error">{error}</p>}
            {teams.length > 0 && (
                <div className="team-table-container">
                    <table className="team-table">
                        <thead>
                        <tr>
                            {Object.keys(teams[0]).map((key) => (
                                <th key={key}>{key.replace(/_/g, ' ').toUpperCase()}</th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {teams.map((team, rowIndex) => (
                            <tr key={rowIndex}>
                                {Object.values(team).map((value, colIndex) => (
                                    <td key={colIndex}>
                                        {typeof value === 'object' && value !== null
                                            ? JSON.stringify(value)
                                            : value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default TeamsPage;

