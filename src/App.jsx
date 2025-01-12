import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import resume from '/public/erica-resume.pdf';
import pfp from '/public/pfp.png';
import html from '/public/html.png';
import css from '/public/css.png';
import js from '/public/javascript.png';
import reactjs from '/public/react.png';
import nodejs from '/public/node js.png';
import bookwithddc from '/public/bookwithddc.png';
import nintendo from '/public/nintendo.png';
import summative from '/public/summative.png';
import cozycat from '/public/cozycat.png';

function App() {

  return (
    <div className="container">
      {/* First Column: Profile Section */}
      <div className="column profile">
        <img
          src={pfp}
          alt="Erica Dominguez"
          className="profile-image"
        />
        <h2>ERICA <br /> DOMINGUEZ</h2>
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
        </div>
        <p>An aspiring frontend developer. Passionate in developing modern and sleek website designs.</p>
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
              <h3>EDUCATION</h3>
              <div className="education-card">
                <div className="icon-column">
                  <i className="bi bi-mortarboard-fill"></i>
                </div>
                <div className="text-column">
                  <h4><strong>Bachelor of Science in Information Technology</strong></h4>
                  Major in Web Development
                  <br />
                  De La Salle University-Dasmariñas
                  <br />
                  <p>2021-Present</p>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="skills">
              <h3>FRONTEND SKILLS</h3>
              <div className="skills-icons">
                <img src={html} alt="HTML5" />
                <img src={css} alt="CSS3" />
                <img src={js} alt="JavaScript" />
                <img src={reactjs} alt="React" />
                <img src={nodejs} alt="Node.js" />
              </div>
              <p>Using <strong>Visual Studio Code</strong> as the <em>IDE</em></p>
            </section>
          
          </div>
          
          <div cllassName="details-row">
            {/* PROJECTS SECTION */}
          <section className="projects">
            <h3>ACADEMIC PROJECTS</h3>
            <div className="project-cards">

              {/* Book with DDC */}
              <div className="project-card">

                {/* thumbnail */}
                <div className="iframe-container">
                  <a href="https://www.canva.com/design/DAGb9armKyc/rYOv49Qpx6eRc1CPmuq76A/watch?utm_content=DAGb9armKyc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbb5cd4f7d4"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none'}}>
                    <img src={bookwithddc}
                      alt="DDC Thumbnail"
                      className="thumbnail"/>
                  </a>
                </div>

                {/* text */}
                <h4>Book with DDC</h4>
                <h2><i class="bi bi-clock"></i>In Progress</h2>
                <p>“Book with DDC” is a web-based appointment management system designed for Dominguez Dental Clinic, and it is the focus of my current capstone project. 
                  I am collaborating with two other team members to develop this system using the ASP.NET MVC framework. I am primarily responsible for the frontend design, 
                  which I planned and developed. </p>

                {/* button */}
                <a href="https://www.canva.com/design/DAGb9armKyc/rYOv49Qpx6eRc1CPmuq76A/watch?utm_content=DAGb9armKyc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbb5cd4f7d4"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none'}}>
                  <button className="view-demo-button">View Video Demo <i className="bi bi-box-arrow-up-right"></i></button>
                </a>
              </div>

              {/* Nintendo */}
              <div className="project-card">

                {/* thumbnail */}
                <div className="iframe-container">
                  <a href="https://www.canva.com/design/DAGb9rH5xRQ/7wTungzBc9veKRUsC9z0ig/watch?utm_content=DAGb9rH5xRQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0fbccaa510"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none'}}>
                    <img src={nintendo}
                      alt="Nintendo Thumbnail"
                      className="thumbnail"/>
                    </a>
                </div>

                {/* text */}
                <h4>Nintendo Switch Accessories Shop</h4>
                <h2><i class="bi bi-check-circle"></i>Complete</h2>
                <p>This is a simple e-commerce website I created for an academic assessment. The site features three pages: Home, Shop, and Contact. I built the entire 
                  project using HTML, CSS, and JavaScript. I did not use a database for this project, so everything is hardcoded. I also made this website responsive 
                  so you can also view it in mobile mode.  </p>

                {/* button */}
                <a href="https://www.canva.com/design/DAGb9rH5xRQ/7wTungzBc9veKRUsC9z0ig/watch?utm_content=DAGb9rH5xRQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0fbccaa510"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none'}}>
                  <button className="view-demo-button">View Video Demo <i className="bi bi-box-arrow-up-right"></i></button>
                </a>
              </div>

              {/* Summative */}
              <div className="project-card">

                {/* thumbnail */}
                <div className="iframe-container">
                  <a href="https://www.canva.com/design/DAGL7_5hoO0/t_SpaOiUG6t2CYXhaWBnTQ/watch?utm_content=DAGL7_5hoO0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8f6c79d8bf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none'}}>
                    <img src={summative}
                      alt="Summative Thumbnail"
                      className="thumbnail"/>
                    </a>
                </div>

                {/* text */}
                <h4>S-ITPE003LA Summative Exam</h4>
                <h2><i class="bi bi-check-circle"></i>Complete</h2>
                <p>This project was my final summative exam for an IT Professional Elective course. 
                  Along with HTML, CSS, and JavaScript, I used Node JS in this project as well as MongoDB for the database. </p>

                {/* button */}
                <a href="https://www.canva.com/design/DAGL7_5hoO0/t_SpaOiUG6t2CYXhaWBnTQ/watch?utm_content=DAGL7_5hoO0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8f6c79d8bf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none'}}>
                  <button className="view-demo-button">View Video Demo <i className="bi bi-box-arrow-up-right"></i></button>
                </a>
              </div>

              {/* Cozy Cat */}
              <div className="project-card">

                {/* thumbnail */}
                <div className="iframe-container">
                  <a href="https://www.canva.com/design/DAGb-yuTbZk/tneCxC-HE3_avr2gj6i-_w/watch?utm_content=DAGb-yuTbZk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9fe373c925"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none'}}>
                    <img src={cozycat}
                      alt="Cozy Cat Thumbnail"
                      className="thumbnail"/>
                    </a>
                </div>

                {/* text */}
                <h4>Cozy Cat Shop</h4>
                <h2><i class="bi bi-check-circle"></i>Complete</h2>
                <p>I also have UI/UX design projects created in Figma, including this one. Cozy Cat is another e-commerce website for cat products, 
                  featuring graphics I designed myself—digitally drawn in Procreate and enhanced in Adobe Illustrator.   </p>

                {/* button */}
                <a href="https://www.canva.com/design/DAGb-yuTbZk/tneCxC-HE3_avr2gj6i-_w/watch?utm_content=DAGb-yuTbZk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9fe373c925"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none'}}>
                  <button className="view-demo-button">View Video Demo <i className="bi bi-box-arrow-up-right"></i></button>
                </a>
              </div>

            </div>
          </section>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
