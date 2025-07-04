import { Link } from 'react-router-dom';

const MainMenu = () => {
    return (
        <footer>
            <nav>
                <ul className="nav flex-column">
                    <li className="nav-item nav-link audiowide-navbar"><Link to="/">Home</Link></li>
                    <li className="nav-item nav-link audiowide-navbar"><Link to="/workflow">Workflow</Link></li>
                    <li className="nav-item nav-link audiowide-navbar"><Link to="/location">Location</Link></li>
                </ul>
            </nav>
        </footer>
    );
};

export default MainMenu;