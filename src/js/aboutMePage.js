import myInfoTemplate from '../templates/aboutMePage.hbs';
import skills from '../dataBase/skills.json';
import refs from './refs';
import image from '../images/IMG_9220.JPG'

const downloadAboutMePage = () => {
  const markup = myInfoTemplate(skills);
  refs.container.innerHTML = '';
  refs.container.insertAdjacentHTML('beforeend', markup);

  const mainInfoContainer = document.querySelector('.mainInformation');
  mainInfoContainer.insertAdjacentHTML('afterbegin', `<img class="mainInformation_img" src=${image} alt="my photo" width="250">`);
  
  refs.homeBtn.classList.add('activePage');
  refs.contactsBtn.classList.remove('activePage');
  refs.projectsBtn.classList.remove('activePage');
};
export default downloadAboutMePage;
