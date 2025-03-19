// script.js
import contentData from './data/content.js';

// Function to populate the profile section
function populateProfile() {
  // Clone the profile template
  const profileTemplate = document.getElementById('profile-template').content;
  const profileSection = profileTemplate.cloneNode(true);

  // Populate the profile section with data
  profileSection.querySelector('.section__text__p1').textContent = contentData.profile.greeting;
  profileSection.querySelector('.title').textContent = contentData.profile.name;
  profileSection.querySelector('.section__text__p2').textContent = contentData.profile.role;

  // Populate buttons
  const downloadCVButton = profileSection.querySelector('.btn-color-2');
  downloadCVButton.textContent = 'Download CV';
  downloadCVButton.onclick = () => window.open(contentData.profile.cvLink);

  const contactButton = profileSection.querySelector('.btn-color-1');
  contactButton.textContent = 'Contact Info';
  contactButton.onclick = () => (window.location.href = contentData.profile.contactLink);

  // Populate social icons
  const socialsContainer = profileSection.querySelector('#socials-container');
  contentData.profile.socials.forEach((social) => {
    const socialIcon = document.createElement('img');
    socialIcon.src = social.icon;
    socialIcon.alt = social.alt;
    socialIcon.classList.add('icon');
    socialIcon.onclick = () => (window.location.href = social.link);
    socialsContainer.appendChild(socialIcon);
  });

  // Append the populated profile section to the main element
  document.querySelector('main').appendChild(profileSection);
}

// Call the populateProfile function when the DOM is loaded
document.addEventListener('DOMContentLoaded', populateProfile);