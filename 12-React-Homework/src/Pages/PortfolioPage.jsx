import projects from "../data/projects";

function PortfolioPage () {
    return(
        <div className="portfolio-container">
        <h1>Portfolio</h1>
        <div className="portfolio-grid">
            {projects.map((project, index) => (
                <div key={index} className="portfolio-item">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <div className="project-links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
                    </div>
                </div>
            ))}
        </div>
    </div>
    );
}

export default PortfolioPage