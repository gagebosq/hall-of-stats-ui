import React, { useState } from 'react';

const HittersPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSearchTerm(event.target.value);
        // Optionally filter hitters based on the search term
        console.log('Search Term:', event.target.value);
    };

    return (
        <div className="content">
            <div className="search-container">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search hitters..."
                    value={searchTerm}
                    onChange={handleSearch}
                />
            </div>
            <h1>Hitters</h1>
        </div>
    );
};

export default HittersPage;
