import Home from './Home/Home';
import Location from './Location/Location';
import Workflow from './Workflow/Workflow';
import Auth from './Credentials/Auth';
import AuthRegister from './Credentials/AuthRegister';
import AuthLogin from './Credentials/AuthLogin';
import AuthLogout from './Credentials/AuthLogout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Here we define all routes for the application
// Which are then used in the Menu component to create the navigation links
const Components = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/workflow" element={<Workflow />} />
                <Route path="/location" element={<Location />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/auth/register" element={<AuthRegister />} />
                <Route path="/auth/login" element={<AuthLogin />} />
                <Route path="/auth/logout" element={<AuthLogout />} />
            </Routes>
        </Router>
    );
};

export default Components;