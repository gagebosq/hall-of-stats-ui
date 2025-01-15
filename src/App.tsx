import logo from './assets/logo.jpg';
import {Sidebar, Menu, MenuItem, sidebarClasses} from 'react-pro-sidebar';
import './App.css';

function App() {
    return (
            <div className="sidebar">
                <div>
                    <img src={logo} className="logo" alt="logo"/>
                </div>
                <div className="navigation">
                    <Sidebar
                        rootStyles={{
                        [`.${sidebarClasses.container}`]: {
                            backgroundColor: 'white',
                            left: '0px'
                        },
                    }}
                        >
                        <Menu
                            menuItemStyles={{
                                button: {
                                    // the active class will be added automatically by react router
                                    // so we can use it to style the active menu item
                                    [`&.active`]: {
                                        backgroundColor: '#000000',
                                        color: '#000000FF',
                                    },
                                },
                            }}>
                            <MenuItem> Pitchers </MenuItem>
                            <MenuItem> Hitters </MenuItem>
                            <MenuItem> Teams </MenuItem>
                        </Menu>
                    </Sidebar>
                </div>
            </div>
    );
}

export default App;