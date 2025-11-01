// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
// import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
// import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
// import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
// import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
// import cLogo from './assets/tech_logo/c.png';
// import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
// import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
// import postgreLogo from './assets/tech_logo/postgre.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agcLogo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/bsa_logo.png';
// import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';

import webverLogo from './assets/work_logo/web_dig.png';
import  easymartLogo from './assets/work_logo/EasyMart.png';
import jscartLogo from './assets/work_logo/jscart.png';
// import tempfanLogo from './assets/work_logo/temp_fan.png';



export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      // { name: 'C', logo: cLogo },
      // { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
      
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: webverseLogo,
      role: "Fullstack Developer",
      company: "InternEzy",
      date: "December 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the MERN stack, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Express JS",
        "MongoDB",
        "Tailwind CSS",
        "Redux",
      ],
    },
    {
  id: 1,
  img: agcLogo,
  role: "IoT Intern",
  company: "TANSAM (Tamil Nadu Smart and Advanced Manufacturing Centre)",
  date: "June 2025",
  desc: "Completed a one-week IoT internship at TANSAM, gaining hands-on experience with sensors, microcontrollers, and embedded systems. Learned to interface IoT devices, collect real-time data, and integrate with cloud platforms for smart automation and monitoring applications.",
  skills: ["IoT", "Arduino", "ESP32", "Sensors", "Cloud Integration", "Embedded Systems"],
}

    // {
    //   id: 2,
    //   img: newtonschoolLogo,
    //   role: "Frontend Intern",
    //   company: "Newton School",
    //   date: "September 2021 - August 2022",
    //   desc: "Worked as a Frontend Developer Intern, designing and implementing scalable UI components and responsive websites using HTML, CSS, JavaScript, Bootstrap, and Material UI. Collaborated with the design team to translate wireframes and prototypes from Figma into interactive, user-friendly web pages.",
    //   skills: [
    //     "HTML",
    //     "CSS",
    //     "Javascript",
    //     "Bootstrap",
    //     "Figma",
    //     "Material UI",
    //   ],
    // },
  ];
  
  export const education = [
 {
  id: 0,
  img: glaLogo, // replace this with your actual logo variable if available
  school: "Rajalakshmi Engineering College, Chennai",
  date: "Sept 2023 - May 2027",
  grade: "8.3 CGPA",
  desc: "I am pursuing my Bachelor's degree in Electronics and Communication Engineering at Rajalakshmi Engineering College, Chennai. Along with my core ECE subjects, I have a strong passion for web technologies and software development. I have gained hands-on experience in the MERN stack (MongoDB, Express.js, React, Node.js) along with HTML, CSS, and JavaScript. My projects and learning experiences focus on blending electronics concepts with modern web development, helping me grow as a versatile and innovative developer.",
  degree: "Bachelor of Engineering - Electronics and Communication Engineering",
},

// ,
//     {
//       id: 1,
//       img: bsaLogo,
//       school: "BSA College, Mathura",
//       date: "Sept 2018 - Aug 2021",
//       grade: "73.2%",
//       desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
//       degree: "Bachelor of Science - BSC (Computer Science)",
//     },
    {
  id: 1,
  img:  bsaLogo, // replace with your actual school logo variable if available
  school: "Government Higher Secondary School, Dharmapuri",
  date: "Apr 2022 - Mar 2023",
  grade: "91.33%",
  desc: "I completed my Class 12 education from Government Higher Secondary School, Dharmapuri, specializing in Computer Science and Mathematics. My higher secondary studies helped me develop strong analytical and problem-solving skills, along with a deep interest in programming and technology.",
  degree: "HSC (XII) - Computer Science with Mathematics",
},

  {
  id: 3,
  img:  bsaLogo, // replace with your actual school logo variable if available
  school: "Government Higher Secondary School, Dharmapuri",
  date: "Apr 2020 - Mar 2021",
  grade: "83%",
  desc: "I completed my Class 10 education from Government Higher Secondary School, Dharmapuri. My schooling years helped me build a strong academic foundation and sparked my interest in computer technologies and logical problem-solving.",
  degree: "SSLC (X) - General Education with Computer Fundamentals",
}

  ];
  
  export const projects = [
  {
    id: 0,
    title: "Streamify - Social Web App",
    description:
      "A full-stack social media web application built with the MERN stack, featuring real-time chat, post sharing, profile customization, and authentication. Streamify allows users to connect, share updates, and engage interactively with others.",
    image: githubdetLogo,
    tags: ["React JS", "Node.js", "Express", "MongoDB", "Socket.io"],
    github: "https://github.com/surya-sivaraj/Streamify",
    webapp: "https://streamify-social-app-1.onrender.com",
  },
  {
    id: 1,
    title: "AI Exam Evaluator",
    description:
      "An AI-based paper evaluation platform that uses OCR and NLP to analyze answer sheets. It features user login, admin dashboard, result visualization, and automated answer sheet evaluation with image/PDF uploads.",
    image:csprepLogo,
    tags: ["React JS", "Node.js", "Express", "MongoDB", "Python", "OCR", "NLP"],
    github: "https://github.com/surya-sivaraj/AI-Exam-Evaluator",
    webapp: "https://ai-exam-evaluator.vercel.app/",
  },
  {
    id: 2,
    title: "Smart Attendance System",
    description:
      "A face-recognition-based attendance system built using Django and Raspberry Pi. It captures real-time images, recognizes faces, and marks hourly attendance automatically, with absence alerts and detailed reports.",
    image: movierecLogo,
    tags: ["Python", "Django", "OpenCV", "Face Recognition", "ESP32"],
    github: "https://github.com/surya-sivaraj/Smart-Attendance-System",
    webapp: "",
  },
  {
    id: 3,
    title: "Tomato Food Delivery App",
    description:
      "A full-stack MERN food delivery application inspired by Zomato, featuring restaurant listings, user authentication, order management, and responsive design.",
    image: webverLogo,
    tags: ["React JS", "Node.js", "Express", "MongoDB", "Bootstrap"],
    github: "https://github.com/surya-sivaraj/Tomato-Food-Delivery",
    webapp: "",
  },
  // {
  //   id: 4,
  //   title: "Temperature Controlled Fan",
  //   description:
  //     "An IoT-based system using sensors to automatically control fan speed based on ambient temperature. Built with Arduino, temperature sensors, and motor control logic.",
  //   image: tempfanLogo,
  //   tags: ["IoT", "Arduino", "Embedded C", "Sensors"],
  //   github: "https://github.com/surya-sivaraj/Temperature-Controlled-Fan",
  //   webapp: "",
  // },
  {
  id: 4,
  title: "JS-Cart",
  description:
    "A dynamic shopping cart web application built using the MERN stack. It features add-to-cart, quantity update, and checkout functionalities with real-time data synchronization using MongoDB and Express API.",
  image: jscartLogo,
  tags: ["React JS", "Node.js", "Express", "MongoDB", "MERN Stack"],
  github: "https://github.com/surya-sivaraj/JS-Cart-MERN",
  webapp: "",
},
{
  id: 5,
  title: "Easy-Mart",
  description:
    "A simple yet elegant e-commerce website built using HTML, CSS, and JavaScript. It includes product listings, cart functionality, and responsive design for a smooth shopping experience.",
  image: easymartLogo,
  tags: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/surya-sivaraj/Easy-Mart",
  webapp: "https://easy-mart002.netlify.app/",
},

];
