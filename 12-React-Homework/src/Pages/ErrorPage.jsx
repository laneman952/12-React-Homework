import { NavLink } from 'react-router-dom';

function ErrorPage() {
    return (
        <div className="home-main">
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <NavLink to="/" className="resume-link" style={{ marginTop: '20px' }}>
        Return Home
        </NavLink>
        </div>
    );
}

export default ErrorPage;