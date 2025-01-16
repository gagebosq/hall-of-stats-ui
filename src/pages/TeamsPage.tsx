import React, { useState } from 'react';

const TeamsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearch = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="content">
            <div className="search-container">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search teams..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <h1>Teams</h1>
        </div>
    );
};

export default TeamsPage;
