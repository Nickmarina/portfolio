import contactsTemplate from '../templates/contactsPage.hbs';
import contacts from '../dataBase/contacts.json';
import refs from './refs';

const downloadContactsPage = () => {
  const markup = contactsTemplate(contacts);
  refs.container.innerHTML = '';
  refs.container.insertAdjacentHTML('beforeend', markup);
  refs.contactsBtn.classList.add('activePage');
  refs.homeBtn.classList.remove('activePage');
  refs.projectsBtn.classList.remove('activePage');
};

export default downloadContactsPage;
