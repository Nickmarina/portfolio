import myInfoTemplate from '../templates/aboutMePage.hbs';
import skills from '../dataBase/skills.json';
import refs from './refs';

const downloadAboutMePage = () => {
  const markup = myInfoTemplate(skills);
  refs.container.innerHTML = '';
  refs.container.insertAdjacentHTML('beforeend', markup);
};
export default downloadAboutMePage;
