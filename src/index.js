import refs from './js/refs';
import downloadAboutMePage from './js/aboutMePage';
import downloadProjectsPage from './js/projectsPage';
import downloadContactsPage from './js/contactsPage';

downloadAboutMePage();
refs.homeBtn.addEventListener('click', downloadAboutMePage);
refs.projectsBtn.addEventListener('click', downloadProjectsPage);
refs.contactsBtn.addEventListener('click', downloadContactsPage);
