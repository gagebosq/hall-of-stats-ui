import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import logo from './assets/logo.jpg';
import { Sidebar, Menu, MenuItem, sidebarClasses } from 'react-pro-sidebar';
import './App.css';
import HomePage from './pages/HomePage';
import PitchersPage from './pages/PitchersPage';
import HittersPage from './pages/HittersPage';
import TeamsPage from './pages/TeamsPage';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
function Layout({ children }) {
    const location = useLocation();
    const isHomepage = location.pathname === '/'; // Check if it's the homepage
    return (
        <div className="app-layout">
            {/* Show sidebar only if not on the homepage */}
            {!isHomepage && (
                <div className="sidebar">
                    <div>
                        <Link to="/">
                            <img src={logo} className="logo" alt="logo" />
                        </Link>
                    </div>
                    <div className="navigation">
                        <Sidebar
                            rootStyles={{
                                [`.${sidebarClasses.container}`]: {
                                    backgroundColor: 'white',
                                    left: '0px',
                                },
                            }}
                        >
                            <Menu
                                menuItemStyles={{
                                    button: {
                                        [`&.active`]: {
                                            backgroundColor: '#000000',
                                            color: '#ffffff',
                                        },
                                    },
                                }}
                            >
                                <MenuItem component={<Link to="/pitchers" />}>Pitchers</MenuItem>
                                <MenuItem component={<Link to="/hitters" />}>Hitters</MenuItem>
                                <MenuItem component={<Link to="/teams" />}>Teams</MenuItem>
                            </Menu>
                        </Sidebar>
                    </div>
                </div>
            )}

            {/* Main Content Section */}
            <div className={isHomepage ? 'homepage-content' : 'content'}>
                {children}
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/pitchers" element={<PitchersPage />} />
                    <Route path="/hitters" element={<HittersPage />} />
                    <Route path="/teams" element={<TeamsPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
