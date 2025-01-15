import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="homepage">
            <h1>Welcome to Hall of Stats</h1>
            <p>Explore stats for Pitchers, Hitters, and Teams.</p>
            <div className="button-container">
                <Link to="/teams" className="button">
                    Teams
                </Link>
                <Link to="/hitters" className="button">
                    Hitters
                </Link>
                <Link to="/pitchers" className="button">
                    Pitchers
                </Link>
            </div>
        </div>
    );
};

export default HomePage;
