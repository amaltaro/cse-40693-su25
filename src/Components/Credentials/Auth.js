import { Link } from 'react-router-dom';

const Auth = () => {
    return (
        <footer>
            <nav>
                <ul className="nav flex-column">
                    <li className="nav-item nav-link audiowide-navbar">
                        <Link to="/auth/register"><button>Register</button></Link>
                    </li>
                {/* These buttons are commented out because now there is going to be
                    a Login/Logout button at the header row.
                    <li className="nav-item nav-link audiowide-navbar">
                        <Link to="/auth/login"><button>Login</button></Link>
                    </li>
                    <li className="nav-item nav-link audiowide-navbar">
                        <Link to="/auth/logout"><button>Logout</button></Link>
                    </li>
                    */}
                </ul>
            </nav>
        </footer>
    );
};

export default Auth;