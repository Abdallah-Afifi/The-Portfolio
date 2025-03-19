// script.js
import contentData from './data/content.js';

// Function to populate the profile section
function populateProfile() {
  const profileTemplate = document.getElementById('profile-template').content;
  const profileSection = profileTemplate.cloneNode(true);

  profileSection.querySelector('.section__text__p1').textContent = contentData.profile.greeting;
  profileSection.querySelector('.title').textContent = contentData.profile.name;
  profileSection.querySelector('.section__text__p2').textContent = contentData.profile.role;

  const downloadCVButton = profileSection.querySelector('.btn-color-2');
  downloadCVButton.textContent = 'Download CV';
  downloadCVButton.onclick = () => window.open(contentData.profile.cvLink);

  const contactButton = profileSection.querySelector('.btn-color-1');
  contactButton.textContent = 'Contact Info';
  contactButton.onclick = () => (window.location.href = contentData.profile.contactLink);

  const socialsContainer = profileSection.querySelector('#socials-container');
  contentData.profile.socials.forEach((social) => {
    const socialIcon = document.createElement('img');
    socialIcon.src = social.icon;
    socialIcon.alt = social.alt;
    socialIcon.classList.add('icon');
    socialIcon.onclick = () => (window.location.href = social.link);
    socialsContainer.appendChild(socialIcon);
  });

  document.querySelector('main').appendChild(profileSection);
}

// Function to populate the about section
function populateAbout() {
  const aboutTemplate = document.getElementById('about-template').content;
  const aboutSection = aboutTemplate.cloneNode(true);

  aboutSection.querySelector('.section__text__p1').textContent = 'Get To Know More';
  aboutSection.querySelector('.title').textContent = contentData.about.title;
  aboutSection.querySelector('.text-container p').textContent = contentData.about.description;

  const aboutContainers = aboutSection.querySelector('.about-containers');
  contentData.about.details.forEach((detail) => {
    const detailContainer = document.createElement('div');
    detailContainer.classList.add('details-container');

    const icon = document.createElement('img');
    icon.src = detail.icon;
    icon.alt = `${detail.title} icon`;
    icon.classList.add('icon');

    const title = document.createElement('h3');
    title.textContent = detail.title;

    const description = document.createElement('p');
    description.innerHTML = detail.description;

    detailContainer.appendChild(icon);
    detailContainer.appendChild(title);
    detailContainer.appendChild(description);
    aboutContainers.appendChild(detailContainer);
  });

  document.querySelector('main').appendChild(aboutSection);
}

// Function to populate the experience section
function populateExperience() {
  const experienceTemplate = document.getElementById('experience-template').content;
  const experienceSection = experienceTemplate.cloneNode(true);

  experienceSection.querySelector('.section__text__p1').textContent = 'Explore My';
  experienceSection.querySelector('.title').textContent = contentData.experience.title;

  const aboutContainers = experienceSection.querySelector('.about-containers');
  contentData.experience.skills.forEach((skillCategory) => {
    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('details-container');

    const categoryTitle = document.createElement('h2');
    categoryTitle.classList.add('experience-sub-title');
    categoryTitle.textContent = skillCategory.category;

    const articleContainer = document.createElement('div');
    articleContainer.classList.add('article-container');

    skillCategory.items.forEach((item) => {
      const article = document.createElement('article');

      const icon = document.createElement('img');
      icon.src = './images/checkmark.png';
      icon.alt = 'Experience icon';
      icon.classList.add('icon');

      const itemDetails = document.createElement('div');
      const itemName = document.createElement('h3');
      itemName.textContent = item.name;
      const itemLevel = document.createElement('p');
      itemLevel.textContent = item.level;

      itemDetails.appendChild(itemName);
      itemDetails.appendChild(itemLevel);
      article.appendChild(icon);
      article.appendChild(itemDetails);
      articleContainer.appendChild(article);
    });

    detailsContainer.appendChild(categoryTitle);
    detailsContainer.appendChild(articleContainer);
    aboutContainers.appendChild(detailsContainer);
  });

  document.querySelector('main').appendChild(experienceSection);
}

// Function to populate the projects section
function populateProjects() {
  const projectsTemplate = document.getElementById('projects-template').content;
  const projectsSection = projectsTemplate.cloneNode(true);

  projectsSection.querySelector('.section__text__p1').textContent = 'Browse My Recent';
  projectsSection.querySelector('.title').textContent = contentData.projects.title;

  const aboutContainers = projectsSection.querySelector('.about-containers');
  contentData.projects.items.forEach((project) => {
    const detailsContainer = document.createElement('div');
    detailsContainer.classList.add('details-container', 'color-container');

    const articleContainer = document.createElement('div');
    articleContainer.classList.add('article-container');

    const projectImage = document.createElement('img');
    projectImage.src = project.image;
    projectImage.alt = `${project.title} Project`;
    projectImage.classList.add('project-img');

    const projectTitle = document.createElement('h2');
    projectTitle.classList.add('experience-sub-title', 'project-title');
    projectTitle.textContent = project.title;

    const projectDescription = document.createElement('p');
    projectDescription.textContent = project.description;

    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('btn-container');

    const githubButton = document.createElement('button');
    githubButton.classList.add('btn', 'btn-color-2', 'project-btn');
    githubButton.textContent = 'Github';
    githubButton.onclick = () => (window.location.href = project.link);

    buttonContainer.appendChild(githubButton);
    articleContainer.appendChild(projectImage);
    detailsContainer.appendChild(articleContainer);
    detailsContainer.appendChild(projectTitle);
    detailsContainer.appendChild(projectDescription);
    detailsContainer.appendChild(buttonContainer);
    aboutContainers.appendChild(detailsContainer);
  });

  document.querySelector('main').appendChild(projectsSection);
}

// Function to populate the contact section
function populateContact() {
  const contactTemplate = document.getElementById('contact-template').content;
  const contactSection = contactTemplate.cloneNode(true);

  contactSection.querySelector('.section__text__p1').textContent = 'Get in Touch';
  contactSection.querySelector('.title').textContent = contentData.contact.title;

  const contactInfoUpperContainer = contactSection.querySelector('.contact-info-upper-container');
  const emailContainer = document.createElement('div');
  emailContainer.classList.add('contact-info-container');

  const emailIcon = document.createElement('img');
  emailIcon.src = './images/email.png';
  emailIcon.alt = 'Email icon';
  emailIcon.classList.add('icon', 'contact-icon', 'email-icon');

  const emailLink = document.createElement('p');
  const emailAnchor = document.createElement('a');
  emailAnchor.href = `mailto:${contentData.contact.email}`;
  emailAnchor.textContent = contentData.contact.email;
  emailLink.appendChild(emailAnchor);

  emailContainer.appendChild(emailIcon);
  emailContainer.appendChild(emailLink);
  contactInfoUpperContainer.appendChild(emailContainer);

  contentData.contact.socials.forEach((social) => {
    const socialContainer = document.createElement('div');
    socialContainer.classList.add('contact-info-container');

    const socialIcon = document.createElement('img');
    socialIcon.src = social.icon;
    socialIcon.alt = social.alt;
    socialIcon.classList.add('icon', 'contact-icon');

    const socialLink = document.createElement('p');
    const socialAnchor = document.createElement('a');
    socialAnchor.href = social.link;
    socialAnchor.textContent = social.link.split('/')[2]; // Extracts domain name
    socialLink.appendChild(socialAnchor);

    socialContainer.appendChild(socialIcon);
    socialContainer.appendChild(socialLink);
    contactInfoUpperContainer.appendChild(socialContainer);
  });

  document.querySelector('main').appendChild(contactSection);
}

// Call all populate functions when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  populateProfile();
  populateAbout();
  populateExperience();
  populateProjects();
  populateContact();
});