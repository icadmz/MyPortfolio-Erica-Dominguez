import './App.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import resume from '/public/Resume-Erica Dominguez.pdf';
import pfp from '/public/pfp.png';
import html from '/public/html.png';
import css from '/public/css.png';
import js from '/public/javascript.png';
import reactjs from '/public/react.png';
import nodejs from '/public/node js.png';
import java from '/public/java.png';
import jquery from '/public/jquery.png';
import typescript from '/public/typescript.png';
import nextjs from '/public/nextjs.png';
import aspnet from '/public/aspnet.png';
import git from '/public/git.png';
import csharp from '/public/csharp.png';
import cplus from '/public/c++.png';
import bootstrap from '/public/bootstrap.png';
import tailwind from '/public/tailwind.png';
import mssql from '/public/mssql.png';
import mongodb from '/public/mongodb.png';
import bookwithddc from '/public/bookwithddc.png';
import nintendo from '/public/nintendo.png';
import summative from '/public/summative.png';
import cozycat from '/public/cozycat.png';
import primefact from '/public/primefact.png';

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
        <p>An aspiring web and software developer. Passionate in developing modern and sleek websites.</p>
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
              <h3>TECHNICAL SKILLS</h3>
              <div className="skills-icons">
                <img src={html} alt="HTML5" />
                <img src={css} alt="CSS3" />
                <img src={tailwind} alt="Tailwind CSS" />
                <img src={js} alt="JavaScript" />
                <img src={typescript} alt="TypeScript" />
                <img src={jquery} alt="JQuery" />
                <img src={java} alt="Java" />
                <img src={csharp} alt="C#" />
                <img src={cplus} alt="C++" />
                <img src={reactjs} alt="React JS" />
                <img src={nextjs} alt="Next JS" />
                <img src={nodejs} alt="Node.js" />  
                <img src={aspnet} alt="ASP.NET" />  
                <img src={bootstrap} alt="Bootstrap" />
                <img src={mssql} alt="MSSQL" />  
                <img src={mongodb} alt="MongoDB" />  
                <img src={git} alt="Git" />
              </div>
              <p>Using <strong>Visual Studio Code</strong> and <strong>Visual Studio 2022</strong> as the <em>IDEs</em></p>
            </section>
          
          </div>
          
          <div cllassName="details-row">
            {/* PROJECTS SECTION */}
          <section className="projects">
            <h3>PROJECTS</h3>
            <div className="project-cards">

              {/* Book with DDC */}
              <div className="project-card">

                {/* thumbnail */}
                <div className="iframe-container">
                  <a href="https://drive.google.com/file/d/1XWrFQ_I9jAaUrVp250F3I_ip7m5S8YUb/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none'}}>
                    <img src={bookwithddc}
                      alt="DDC Thumbnail"
                      className="thumbnail"/>
                  </a>
                  {/* Canva Link: https://www.canva.com/design/DAGb9armKyc/rYOv49Qpx6eRc1CPmuq76A/watch?utm_content=DAGb9armKyc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbb5cd4f7d4 */}
                </div>

                {/* text */}
                {/* <div className="project-text-content"> */}
                <h4>Book with DDC</h4>
                <h2><i class="bi bi-clock"></i>Complete</h2>
                <div className="project-text-content">
                <p>"Book with DDC" is a web-based appointment management system designed for Dominguez Dental Clinic, which was the focus of my capstone project. 
                  I collaborated with two team members on its development using the ASP.NET MVC framework with MSSQL for the database management. 
                  I made significant contributions to the full-stack development of the project and was primarily responsible for planning and developing the frontend design.
                </p>
                </div>

                {/* button */}
                <a href="https://drive.google.com/file/d/1XWrFQ_I9jAaUrVp250F3I_ip7m5S8YUb/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none'}}>
                  <button className="view-demo-button">View Video Demo <i className="bi bi-box-arrow-up-right"></i></button>
                </a>
                {/* Canva Link: https://www.canva.com/design/DAGb9armKyc/rYOv49Qpx6eRc1CPmuq76A/watch?utm_content=DAGb9armKyc&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hbb5cd4f7d4 */}
              </div>

              {/* Nintendo */}
              <div className="project-card">

                {/* thumbnail */}
                <div className="iframe-container">
                  <a href="https://drive.google.com/file/d/1GpuLWDysWZzX7f9fqw5_HEMUjp_dBltc/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none'}}>
                    <img src={nintendo}
                      alt="Nintendo Thumbnail"
                      className="thumbnail"/>
                  </a>
                  {/* Canva Link: https://www.canva.com/design/DAGb9rH5xRQ/7wTungzBc9veKRUsC9z0ig/watch?utm_content=DAGb9rH5xRQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0fbccaa510 */}
                </div>

                {/* text */}
                <h4>Nintendo Switch Accessories</h4>
                <h2><i class="bi bi-check-circle"></i>Complete</h2>
                <div className="project-text-content">
                  <p>This is a simple e-commerce website I created for an academic assessment. The site features three pages: Home, Shop, and Contact. I built the entire 
                    project using HTML, CSS, and JavaScript. I did not use a database for this project, so everything is hardcoded. I also made this website responsive 
                    so you can also view it in mobile mode.  
                  </p>
                </div>

                {/* button */}
                <a href="https://drive.google.com/file/d/1GpuLWDysWZzX7f9fqw5_HEMUjp_dBltc/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none'}}>
                  <button className="view-demo-button">View Video Demo <i className="bi bi-box-arrow-up-right"></i></button>
                </a>
                {/* Canva Link: https://www.canva.com/design/DAGb9rH5xRQ/7wTungzBc9veKRUsC9z0ig/watch?utm_content=DAGb9rH5xRQ&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h0fbccaa510 */}
              </div>

              {/* Summative */}
              <div className="project-card">

                {/* thumbnail */}
                <div className="iframe-container">
                  <a href="https://drive.google.com/file/d/16QAFwcDIRQAnbnE6FCRAsO4tu-gh2KQe/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none'}}>
                    <img src={summative}
                      alt="Summative Thumbnail"
                      className="thumbnail"/>
                  </a>
                  {/* Canva Link: https://www.canva.com/design/DAGL7_5hoO0/t_SpaOiUG6t2CYXhaWBnTQ/watch?utm_content=DAGL7_5hoO0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8f6c79d8bf */}
                </div>

                {/* text */}
                <h4>S-ITPE003LA Summative Exam</h4>
                <h2><i class="bi bi-check-circle"></i>Complete</h2>
                <div className="project-text-content">
                  <p>This project was my final summative exam for an IT Professional Elective course. 
                    Along with HTML, CSS, and JavaScript, I used Node JS in this project as well as MongoDB for the database. 
                  </p>
                </div>

                {/* button */}
                <a href="https://drive.google.com/file/d/16QAFwcDIRQAnbnE6FCRAsO4tu-gh2KQe/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none'}}>
                  <button className="view-demo-button">View Video Demo <i className="bi bi-box-arrow-up-right"></i></button>
                </a>
                {/* Canva Link: https://www.canva.com/design/DAGL7_5hoO0/t_SpaOiUG6t2CYXhaWBnTQ/watch?utm_content=DAGL7_5hoO0&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h8f6c79d8bf */}                
              </div>

              {/* Cozy Cat */}
              <div className="project-card">

                {/* thumbnail */}
                <div className="iframe-container">
                  <a href="https://drive.google.com/file/d/16ogcb3xVVtHROQ99eYOMXTbsbWDnCJup/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none'}}>
                    <img src={cozycat}
                      alt="Cozy Cat Thumbnail"
                      className="thumbnail"/>
                 </a>
                 {/* Canva Link: https://www.canva.com/design/DAGb-yuTbZk/tneCxC-HE3_avr2gj6i-_w/watch?utm_content=DAGb-yuTbZk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9fe373c925 */}
                </div>

                {/* text */}
                <h4>Cozy Cat Shop</h4>
                <h2><i class="bi bi-check-circle"></i>Complete</h2>
                <div className="project-text-content">
                  <p>I also have UI/UX design projects created in Figma, including this one. Cozy Cat is another e-commerce website for cat products, 
                    featuring graphics I designed myself—digitally drawn in Procreate and enhanced in Adobe Illustrator.   
                  </p>
                </div>

                {/* button */}
                <a href="https://drive.google.com/file/d/16ogcb3xVVtHROQ99eYOMXTbsbWDnCJup/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none'}}>
                  <button className="view-demo-button">View Video Demo <i className="bi bi-box-arrow-up-right"></i></button>
                </a>
                {/* Canva Link: https://www.canva.com/design/DAGb-yuTbZk/tneCxC-HE3_avr2gj6i-_w/watch?utm_content=DAGb-yuTbZk&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h9fe373c925 */}
              </div>
              
              {/* Prime Factorial */}
              <div className="project-card">

                {/* thumbnail */}
                <div className="iframe-container">
                  <a href="https://drive.google.com/file/d/1qNYJpkS4h0geO6nZUWuPhZv0-1xr9Cws/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{textDecoration: 'none'}}>
                    <img src={primefact}
                      alt="Prime Factorial Thumbnail"
                      className="thumbnail"/>
                 </a>
                </div>

                {/* text */}
                <h4>Prime Factorial</h4>
                <h2><i class="bi bi-check-circle"></i>Complete</h2>
                <div className="project-text-content">
                  <p> A single-page web application providing users with two core mathematical utilities: prime number 
                  checking and factorial calculation. Users can input a number and instantly view the results.
                  </p>
                </div>

                {/* button */}
                <a href="https://drive.google.com/file/d/1qNYJpkS4h0geO6nZUWuPhZv0-1xr9Cws/view?usp=drive_link"
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
