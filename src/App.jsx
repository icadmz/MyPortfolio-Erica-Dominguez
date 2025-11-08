import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";

import resume from './assets/pdf/Resume-Erica Dominguez.pdf';
import pfp from './assets/images/pfp.jpg';

import { TECHNICAL_SKILLS_DATA, PROJECT_DATA } from './Data.js';

function App() {

  return (
    <div className="container">
      {/* First Column: Profile Section */}
      <div className="column profile">
        <img
          src={pfp}
          alt="Erica Dominguez"
          className="profile-image"
          style={{ borderRadius: '50%' }}
        />
        <h2>Erica Therese <br /> Dominguez</h2>
        <div className="icons">
          <a href="mailto:ericaatherese@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration: 'none'}}>
            <i className="bi bi-envelope-fill"></i>
          </a>
          <a href="https://www.linkedin.com/in/erica-dominguez-82324b341/"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration: 'none'}}>
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="https://github.com/icadmz"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration: 'none'}}>
            <i className="bi bi-github"></i>
          </a>
        </div>
        <p>An aspiring web and software developer passionate about developing modern, sleek websites and applications.</p>
        <a href={resume} download>
          <button className="resume-button">Download Resume <i className="bi bi-download"></i></button> 
        </a>
      </div>

      {/* Second Column: Details Section */}
      <div className="column details">
        <div className="education-skills-projects">
          <div className="details-row">
            {/* Education Section */} 
            <section className="education">
              <h3>Education</h3>
              <div className="education-card">
                <div className="icon-column">
                  <i className="bi bi-mortarboard-fill"></i>
                </div>
                <div className="text-column">
                  <h4><strong>Bachelor of Science in Information Technology</strong></h4>
                  With Specialization in Web Development
                  <br />
                  De La Salle University-Dasmariñas
                  <br />
                  <p>2021-2025</p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="skills">
                <h3>Technical Skills</h3>
                <div className="skills-icons">
                    {TECHNICAL_SKILLS_DATA.map((skill) => (
                        <div 
                            className="skill-tooltip-container" 
                            data-info={skill.info}
                            key={skill.alt}
                        >
                            <img src={skill.src} alt={skill.alt} />
                            <span className="tooltip-text">{skill.info}</span>
                        </div>
                    ))}
                </div>
                <p>Using <strong>Visual Studio Code</strong> and <strong>Visual Studio 2022</strong> as the <em>IDEs</em></p>
            </section>

          </div>
          
          <div className="details-row">
          {/* Projects Section */}
          <section className="projects">
            <h3>Projects</h3>
            <div className="project-cards">
                {PROJECT_DATA.map((project) => (
                    <div className="project-card" key={project.title}>

                        {/* Thumbnail */}
                        <div className="iframe-container">
                            <a 
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{textDecoration: 'none'}}
                            >
                                <img 
                                    src={project.thumbnailSrc}
                                    alt={project.thumbnailAlt}
                                    className="thumbnail"
                                />
                            </a>
                        </div>

                        {/* Text Content */}
                        <h4>{project.title}</h4>
                        <div style={{flex: 1}}>
                            <h2>
                              <i
                                className={`bi ${
                                  project.status &&
                                  project.status.toLowerCase().includes('complete')
                                    ? 'bi-check-circle'
                                    : 'bi-clock'
                                }`}
                              ></i>
                              {project.status}
                            </h2>                            
                            <h2><i className="bi bi-stack"></i>{project.tech}</h2>
                            <h2><i className="bi bi-file-code"></i>{project.ide}</h2>
                        </div>
                        <div className="project-text-content">
                            <p>{project.description}</p>
                        </div>

                        {/* Button */}
                        <a 
                            href={project.demoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button-wrapper"
                        >
                            <button className="view-demo-button">
                                View Video Demo <i className="bi bi-box-arrow-up-right"></i>
                            </button>
                        </a>
                    </div>
                ))}
            </div>
          </section>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
