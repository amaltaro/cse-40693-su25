import { useNavigate } from 'react-router-dom';
import ProfileMenu from '../ProfileMenu/ProfileMenu';
import './Header.css';

export default function Header({ title = "Default Title" }) {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
    };

    return (
        <section className="header-container">
            <header className="header-card">
                <div className="header-content">
                    <div className="logo-container" onClick={handleLogoClick} title="Go to Home">
                        <img
                            alt="CMS Experiment logo"
                            src="./cms_logo.png"
                            className="cms-logo"
                        />
                    </div>
                    
                    <div className="title-container">
                        <h2 className="header-title">
                            {title ? (
                                <>
                                    <span
                                        className="home-link"
                                        onClick={handleLogoClick}
                                        title="Go to Home"
                                    >
                                        Home
                                    </span>
                                    <span className="title-separator"> / </span>
                                    <span className="page-title">{title}</span>
                                </>
                            ) : (
                                <span className="page-title">Home</span>
                            )}
                        </h2>
                    </div>
                    
                    <div className="profile-container">
                        <ProfileMenu />
                    </div>
                </div>
            </header>
        </section>
    );
}

/*
 * Future Enhancement Suggestions:
 * 
 * 1. Quick Actions Menu:
 *    - Add a dropdown with common actions (Dashboard, Settings, Help)
 *    - Use Bootstrap Icons for visual consistency
 * 
 * 2. System Status Indicator:
 *    - Show connection status, notifications, or alerts
 *    - Color-coded indicators (green=online, red=offline)
 * 
 * 3. Search Bar:
 *    - Global search functionality across the application
 *    - Quick access to workflows, users, or settings
 * 
 * 4. Notifications:
 *    - Bell icon with notification count
 *    - Dropdown with recent notifications
 * 
 * 5. User Context:
 *    - Show current user role/permissions
 *    - Display last login time or session info
 * 
 * 6. Responsive Menu:
 *    - Hamburger menu for mobile devices
 *    - Collapsible navigation on smaller screens
 */