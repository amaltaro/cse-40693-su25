import Header from '../Header/Header';
import MainMenu from '../MainMenu/MainMenu';
import './Home.css';

export default function Home() {
    return (
        <section className="home-container">
            <Header title="" />

            <div className="container">
                <div className="home-content">
                    <div className="welcome-section">
                        <div className="welcome-card">
                            <div className="welcome-header">
                                <img
                                    alt="CMS Experiment logo"
                                    src="./cms_logo.png"
                                    className="welcome-logo"
                                />
                                <h2 className="welcome-title">Welcome to CMS Workflow Monitoring</h2>
                                <p className="welcome-description">
                                    Monitor and manage CMS workflow operations with real-time data and advanced filtering capabilities.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="menu-section">
                        <div className="menu-card">
                            <h3 className="menu-title">
                                <i className="bi bi-list me-2"></i>
                                Navigation Menu
                            </h3>
                            <MainMenu />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}