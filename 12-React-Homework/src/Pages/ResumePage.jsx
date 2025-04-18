import '../styles/ResumePage.css';

function ResumePage () {
    return(
        <div className="page-content">
        <h1>My Resume</h1>
        <iframe
            src="/Kyle-Software-Developing-Resume.pdf"
            title="Kyle Lane Resume"
            className="resume-iframe"
        ></iframe>
        <p>
            <a href="/Kyle-Software-Developing-Resume.pdf" download className="resume-link">
                Download Resume
            </a>
        </p>
        </div>
    );
}
export default ResumePage