import React from "react";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to MLB Stats Lookup</h1>
            <ul>
                <li><Link to="/hitters">View Hitters</Link></li>
                <li><Link to="/pitchers">View Pitchers</Link></li>
                <li><Link to="/teams">View Teams</Link></li>
            </ul>
        </div>
    );
};

export default HomePage;
