import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/hitters">Hitters</Link></li>
                <li><Link to="/pitchers">Pitchers</Link></li>
                <li><Link to="/teams">Teams</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
