function ResumePage () {
    return(
        <div className="page-content">
        <h1>My Resume</h1>
        <iframe
            src="/Kyle's Software Developing Resume .pdf"
            title="Kyle's software Developing Resume"
            className="resume-iframe"
        ></iframe>
        <p>
            <a href="/Kyle's Software Developing Resume .pdf" download className="resume-link">
                Download Resume
            </a>
        </p>
        </div>
    );
}
export default ResumePage