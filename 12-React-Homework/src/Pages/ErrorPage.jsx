import { Link } from 'react-router';

function ErrorPage() {
    return (
        <div className="home-main">
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist.</p>
            <Link to="/" className="resume-link" style={{ marginTop: '20px' }}>
        Return Home
        </Link>
        </div>
    );
}

export default ErrorPage;