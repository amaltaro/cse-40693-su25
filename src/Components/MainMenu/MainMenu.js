import { Link } from 'react-router-dom';

const MainMenu = () => {
    return (
        <nav>
            <ul className="nav">
                <li className="nav-item">
                    <Link to="/summary" className="nav-link">
                        <i className="bi bi-bar-chart me-2"></i>
                        Summary
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/workflow" className="nav-link">
                        <i className="bi bi-diagram-3 me-2"></i>
                        Workflow
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/services" className="nav-link">
                        <i className="bi bi-server me-2"></i>
                        Central Services
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/agents" className="nav-link">
                        <i className="bi bi-people me-2"></i>
                        Agents
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/location" className="nav-link">
                        <i className="bi bi-geo-alt me-2"></i>
                        Location
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default MainMenu;