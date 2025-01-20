import { Link } from 'react-router-dom';
import logo from "../assets/logo.jpg";

const HomePage = () => {
    return (
        <div className="homepage-content">
            <img src={logo} className="logo-home" alt="logo"/>
            <h1>Welcome to Hall of Stats</h1>
            <p>Are you sure you want to see all stats from the past two centuries?</p>
            <div className="button-container">
                <Link to="/teams" className="button">
                    Indubidily
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
