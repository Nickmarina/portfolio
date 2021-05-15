import contactsTemplate from '../templates/contactsPage.hbs';
import refs from './refs';

const downloadContactsPage = () => {
  refs.container.innerHTML = '';
  refs.container.insertAdjacentHTML('beforeend', contactsTemplate());
};

export default downloadContactsPage;
