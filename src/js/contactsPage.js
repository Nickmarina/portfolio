import contactsTemplate from '../templates/contactsPage.hbs';
import refs from './refs';

const downloadContactsPage = () => {
  refs.container.innerHTML = '';
  refs.container.insertAdjacentHTML('beforeend', contactsTemplate());
  refs.contactsBtn.classList.add('activePage');
  refs.homeBtn.classList.remove('activePage');
  refs.projectsBtn.classList.remove('activePage');
};

export default downloadContactsPage;
