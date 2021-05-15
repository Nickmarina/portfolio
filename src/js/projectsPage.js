import projectsTemplate from '../templates/projectsPage.hbs';
import projects from '../dataBase/projects.json';
import refs from './refs';

const downloadProjectsPage = () => {
  const markup = projectsTemplate(projects);
  refs.container.innerHTML = '';
  refs.container.insertAdjacentHTML('beforeend', markup);
};

export default downloadProjectsPage;
