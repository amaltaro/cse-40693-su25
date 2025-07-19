import { Link } from 'react-router-dom';
import { checkUser } from '../../Services/Credentials';
import './Auth.css';

const Auth = () => {
    const isLoggedIn = checkUser();
    console.log("Auth check --> isLoggedIn: ", isLoggedIn);

    return (
        <div className="auth-container">
            <div className="auth-card">
                <div className="auth-header">
                    <h2 className="auth-title">Welcome to CMS Workflow Monitoring</h2>
                    <p className="auth-subtitle">Please authenticate to continue</p>
                </div>

                <div className="auth-buttons">
                    {/* Render buttons according to the user state. 
                    If user is logged in, then just show Logout, else Register and Login. */}
                    {!isLoggedIn && (
                        <>
                            <div className="auth-button-group">
                                <Link to="/auth/register" className="auth-link">
                                    <button className="btn btn-primary btn-lg auth-btn auth-btn-register">
                                        <i className="bi bi-person-plus-fill me-2"></i>
                                        Register
                                    </button>
                                </Link>

                                <Link to="/auth/login" className="auth-link">
                                    <button className="btn btn-outline-primary btn-lg auth-btn auth-btn-login">
                                        <i className="bi bi-box-arrow-in-right me-2"></i>
                                        Login
                                    </button>
                                </Link>
                            </div>
                        </>
                    )}
                    {isLoggedIn && (
                        <div className="auth-button-group">
                            <Link to="/auth/logout" className="auth-link">
                                <button className="btn btn-danger btn-lg auth-btn auth-btn-logout">
                                    <i className="bi bi-box-arrow-left me-2"></i>
                                    Logout
                                </button>
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Auth;