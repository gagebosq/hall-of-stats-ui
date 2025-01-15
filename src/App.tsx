import logo from './assets/logo.jpg';
import './App.css';

function App() {
    return (
        <>
            <div>
                <img src={logo} className="logo" alt="logo" />
            </div>
            <div className="sidebar">
                <h2>Sidebar</h2>
                <ul>
                    <li><a href="#" >Pitchers</a></li>
                    <li><a href="#" >Hitters</a></li>
                    <li><a href="#" >Teams</a></li>
                </ul>
            </div>
        </>
    );
}

export default App;