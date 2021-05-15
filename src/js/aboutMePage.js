import myInfoTemplate from '../templates/aboutMePage.hbs';
import skills from '../dataBase/skills.json';
import refs from './refs';

const downloadAboutMePage = () => {
  const markup = myInfoTemplate(skills);
  refs.container.innerHTML = '';
  refs.container.insertAdjacentHTML('beforeend', markup);
  refs.homeBtn.classList.add('activePage');
  refs.contactsBtn.classList.remove('activePage');
  refs.projectsBtn.classList.remove('activePage');
};
export default downloadAboutMePage;
