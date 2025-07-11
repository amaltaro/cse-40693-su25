import { Link } from 'react-router-dom';
import { checkUser } from '../../Services/Credentials';

const Auth = () => {
    const isLoggedIn = checkUser();
    console.log("Auth check --> isLoggedIn: ", isLoggedIn);

    return (
        <footer>
            <nav>
                <ul className="nav flex-column">
                    {/* Render buttons according to the user state. 
                    If user is logged in, then just show Logout, else Register and Login. */}
                    {!isLoggedIn && (
                        <>
                    <li className="nav-item nav-link audiowide-navbar">
                        <Link to="/auth/register"><button>Register</button></Link>
                    </li>
                    <li className="nav-item nav-link audiowide-navbar">
                        <Link to="/auth/login"><button>Login</button></Link>
                    </li>
                    </>
                    )}
                    {isLoggedIn && (
                    <li className="nav-item nav-link audiowide-navbar">
                        <Link to="/auth/logout"><button>Logout</button></Link>
                    </li>
                    )}
                </ul>
            </nav>
        </footer>
    );
};

export default Auth;