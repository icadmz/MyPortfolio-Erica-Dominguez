// Techniucal Skills Images
import html from "./assets/images/html.png";
import css from "./assets/images/css.png";
import tailwind from "./assets/images/tailwind.png";
import js from "./assets/images/javascript.png";
import typescript from "./assets/images/typescript.png";
import jquery from "./assets/images/jquery.png";
import java from "./assets/images/java.png";
import csharp from "./assets/images/csharp.png";
import cplus from "./assets/images/c++.png";
import reactjs from "./assets/images/react.png";
import reactnative from "./assets/images/react native.png";
import nextjs from "./assets/images/nextjs.png";
import nodejs from "./assets/images/node js.png";
import aspnet from "./assets/images/aspnet.png";
import bootstrap from "./assets/images/bootstrap.png";
import mssql from "./assets/images/mssql.png";
import mongodb from "./assets/images/mongodb.png";
import git from "./assets/images/git.png";

// Project Images
import bookwithddc from "./assets/images/bookwithddc.png";
import nintendo from "./assets/images/nintendo.png";
import summative from "./assets/images/summative.png";
import cozycat from "./assets/images/cozycat.png";
import primefact from "./assets/images/primefact.png";
import icastasks from "./assets/images/icastasks.png";
import myportfolio from "./assets/images/myportfolio.png";

// Technical Skills Data
export const TECHNICAL_SKILLS_DATA = [
    {
        src: html,
        alt: "HTML5",
        info: "HTML5 - Markup Language",
    },
    {
        src: css,
        alt: "CSS3",
        info: "CSS3 - Stylesheet Language",
    },
    {
        src: tailwind,
        alt: "Tailwind CSS",
        info: "Tailwind CSS - Utility-First CSS Framework",
    },
    {
        src: js,
        alt: "JavaScript",
        info: "JavaScript - Programming Language",
    },
    {
        src: typescript,
        alt: "TypeScript",
        info: "TypeScript - Superset of JavaScript",
    },
    {
        src: jquery,
        alt: "JQuery",
        info: "JQuery - JavaScript Library",
    },
    {
        src: java,
        alt: "Java",
        info: "Java - Programming Language",
    },
    {
        src: csharp,
        alt: "C#",
        info: "C# - Programming Language",
    },
    {
        src: cplus,
        alt: "C++",
        info: "C++ - Programming Language",
    },
    {
        src: reactjs,
        alt: "React JS",
        info: "React JS - JavaScript Library",
    },
    {
        src: reactnative,
        alt: "React Native",
        info: "React Native - Mobile App Development Framework",
    },
    {
        src: nextjs,
        alt: "Next JS",
        info: "Next JS - React Framework",
    },
    {
        src: nodejs,
        alt: "Node.js",
        info: "Node.js - JavaScript Runtime",
    },
    {
        src: aspnet,
        alt: "ASP.NET",
        info: "ASP.NET - Web Framework",
    },
    {
        src: bootstrap,
        alt: "Bootstrap",
        info: "Bootstrap - CSS Framework",
    },
    {
        src: mssql,
        alt: "MSSQL",
        info: "MSSQL - Database Management System",
    },
    {
        src: mongodb,
        alt: "MongoDB",
        info: "MongoDB - NoSQL Database",
    },
    {
        src: git,
        alt: "Git",
        info: "Git - Version Control System",
    },
];

// Projects Data
export const PROJECT_DATA = [
    {
        title: "Book with DDC",
        status: "Complete",
        tech: "C#, JavaScript, ASP.NET MVC, MSSQL",
        ide: "Microsoft Visual Studio 2022",
        description: `Developed a full-stack appointment management system designed to resolve operational challenges and scheduling errors caused by the Dominguez Dental Clinic’s prior manual processes, ultimately benefiting both staff and patients. Built using the ASP.NET MVC framework and MSSQL, I collaborated with two team members and made significant contributions across the entire stack. My role encompassed all-around development, including front-end design and coding, implementing core back-end logic, and managing the database architecture. Key features developed include online patient booking, secure appointment access, patient record storage, and personal profile management.`,
        thumbnailSrc: bookwithddc,
        thumbnailAlt: "DDC Thumbnail",
        // demoLink: "https://drive.google.com/file/d/1XWrFQ_I9jAaUrVp250F3I_ip7m5S8YUb/view?usp=sharing",
        demoLink: "http://dominguezdental-001-site1.qtempurl.com/",
        githubLink:"https://github.com/icadmz/Book-with-DDC",
    },
    {
        title: "Prime Factorial",
        status: "Complete",
        tech: "C#, JavaScript, ASP.NET MVC",
        ide: "Microsoft Visual Studio 2022",
        description: `A single-page web application providing users with two core mathematical utilities: prime number checking and factorial calculation. Users can input a number and instantly view the results.`,
        thumbnailSrc: primefact,
        thumbnailAlt: "Prime Factorial Thumbnail",
        demoLink: "https://drive.google.com/file/d/1qNYJpkS4h0geO6nZUWuPhZv0-1xr9Cws/view?usp=drive_link",
        githubLink:"https://github.com/icadmz/Prime-Factorial",
    },
    {
        title: "My Portfolio",
        status: "Complete",
        tech: "React, JavaScript, Node.js",
        ide: "Visual Studio Code",
        description: `My professional portfolio website serving as a centralized resource for potential employers. The site showcases my selected projects, highlights my technical skills and education, and provides access to key credentials, including my resume and professional social media accounts.`,
        thumbnailSrc: myportfolio,
        thumbnailAlt: "My Portfolio Thumbnail",
        demoLink: "https://myportfolio-ericadominguez.netlify.app",
        githubLink:"https://github.com/icadmz/MyPortfolio-Erica-Dominguez"
    },
    {
        title: "Ica's Tasks",
        status: "Complete",
        tech: "Electron, React, TypeScript, MongoDB, Node.js",
        ide: "Visual Studio Code",
        description: `Ica's Tasks is a to-do list desktop widget I developed to provide a dedicated, lightweight application for managing tasks right on the screen. This personal project was built using Electron to deliver that native desktop feel, with the frontend implemented in React and TypeScript. To handle the application’s data storage, I utilized MongoDB.`,
        thumbnailSrc: icastasks,
        thumbnailAlt: "Ica's Tasks Thumbnail",
        demoLink: "https://drive.google.com/file/d/1MvJctiV2dXtdb6xCyhgY3V--_1YBnYIx/view?usp=sharing",
        githubLink:"",
    },
    {
        title: "Nintendo Accessories Shop",
        status: "In Progress",
        tech: "HTML, CSS, JavaScript",
        ide: "Visual Studio Code",
        description: `Developed a fully responsive e-commerce website as an academic assessment, showcasing strong foundational proficiency in HTML, CSS, and vanilla JavaScript. The site includes essential pages (Home, Shop, Contact) and was built as a purely front-end application with hardcoded data. My current plan is to refactor this project into a full-stack application and enhance the overall user interface/user experience (UI/UX).`,
        thumbnailSrc: nintendo,
        thumbnailAlt: "Nintendo Thumbnail",
        demoLink: "https://drive.google.com/file/d/1GpuLWDysWZzX7f9fqw5_HEMUjp_dBltc/view?usp=sharing",
        githubLink:"",
    },
    {
        title: "S-ITPE003LA Summative",
        status: "Complete",
        tech: "JavaScript, Node.js, Express.js, MongoDB",
        ide: "Visual Studio Code",
        description: `My final summative exam project for S-ITPE003LA course is a collection of outputs from assessments compiled throughout the term for major lessons including, JavaScript Objects, Node.js, Multi-File, MongoDB, and a simple student grades management page applying CRUD (Create, Read, Update, Delete) operations.`,
        thumbnailSrc: summative,
        thumbnailAlt: "Summative Thumbnail",
        demoLink: "https://drive.google.com/file/d/16QAFwcDIRQAnbnE6FCRAsO4tu-gh2KQe/view?usp=sharing",
        githubLink:"",
    },
    // {
    //     title: "Cozy Cat Shop",
    //     status: "Complete",
    //     tech: "Figma, Procreate, Adobe Illustrator",
    //     description: `I also have UI/UX design projects created in Figma, including this one. Cozy Cat is another e-commerce website for cat products, featuring graphics I designed myself—digitally drawn in Procreate and enhanced in Adobe Illustrator.`,
    //     thumbnailSrc: cozycat,
    //     thumbnailAlt: "Cozy Cat Thumbnail",
    //     demoLink: "https://drive.google.com/file/d/16ogcb3xVVtHROQ99eYOMXTbsbWDnCJup/view?usp=sharing",
    // },
];
  