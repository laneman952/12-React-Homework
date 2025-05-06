import '../styles/ResumePage.css';

function ResumePage () {
    return(
        <div className="page-content">
        <h1>My Resume</h1>
        <div className="resume-container">
        <iframe
            src="https://docs.google.com/gview?url=https://kylelane-portfolio.netlify.app/Kyle's-Software-Developing-Resume.pdf&embedded=true"
            title="Kyle Lane Resume"
            className="resume-iframe"
        ></iframe>
      </div>
        <p>
            <a href="/Kyle's-Software-Developing-Resume.pdf" download className="resume-link">
                Download Resume (.docx)
            </a>
        </p>
        </div>
    );
}
export default ResumePage