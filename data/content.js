// data/content.js
const contentData = {
  profile: {
    name: "Abdallah Afifi",
    role: "Software Engineer",
    greeting: "Hello, I'm",
    cvLink: "./images/Abdallah_Afifi - Resume.pdf",
    contactLink: "./#contact",
    socials: [
      {
        icon: "./images/linkedin.png",
        link: "https://linkedin.com/in/abdallah-afifi26",
        alt: "My LinkedIn profile",
      },
      {
        icon: "./images/github.png",
        link: "https://github.com/Abdallah-Afifi",
        alt: "My Github profile",
      },
    ],
  },
  about: {
    title: "About Me",
    description:
      "I am a passionate Software Engineer with a strong foundation in computer science and mathematics. I have experience in developing machine learning-powered applications, optimizing software performance, and building scalable systems. My expertise includes Python, C++, JavaScript, and various web and mobile technologies. I am always eager to learn and apply new technologies to solve real-world problems.",
    details: [
      {
        icon: "./images/experience.png",
        title: "Experience",
        description: "2+ years <br />Software Development",
      },
      {
        icon: "./images/education.png",
        title: "Education",
        description: "B.Sc. Computer Science<br />Mathematics Minor",
      },
    ],
  },
  experience: {
    title: "Experience",
    skills: [
      {
        category: "Software Development",
        items: [
          { name: "Python", level: "Experienced" },
          { name: "C++", level: "Experienced" },
          { name: "JavaScript", level: "Intermediate" },
          { name: "React", level: "Intermediate" },
          { name: "SQL", level: "Intermediate" },
          { name: "Git", level: "Experienced" },
        ],
      },
      {
        category: "Tools & Technologies",
        items: [
          { name: "TensorFlow/PyTorch", level: "Intermediate" },
          { name: "Flask", level: "Intermediate" },
          { name: "Verilog", level: "Intermediate" },
          { name: "OpenCV", level: "Intermediate" },
        ],
      },
    ],
  },
  projects: {
    title: "Projects",
    items: [
      {
        title: "Evergreen",
        description:
          "Automated secure dependency usage across 50+ repositories, reducing vulnerability detection time by 35%.",
        image: "./images/project-1.png",
        link: "https://github.com/github/evergreen",
      },
      {
        title: "Library Cataloguing",
        description:
          "Developed an app that automated cataloging of 2,000+ books using machine learning and OCR, reducing manual entry time by 30%.",
        image: "./images/project-2.png",
        link: "https://github.com/Abdallah-Afifi/Book-Cataloguing",
      },
      {
        title: "RISCV Simulator",
        description:
          "Developed a RISCV processor simulator, achieving a 10% performance improvement in architecture simulation.",
        image: "./images/project-3.png",
        link: "https://github.com/Abdallah-Afifi/RISC-V-RV32I-Simulator",
      },
    ],
  },
  contact: {
    title: "Contact Me",
    email: "AbdallahFathi@aucegypt.edu",
    socials: [
      {
        icon: "./images/linkedin.png",
        link: "https://www.linkedin.com/in/abdallah-afifi26",
        alt: "LinkedIn icon",
      },
      {
        icon: "./images/github.png",
        link: "https://github.com/Abdallah-Afifi",
        alt: "GitHub icon",
      },
    ],
  },
};

export default contentData;