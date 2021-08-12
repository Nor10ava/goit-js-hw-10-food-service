import './styles.css';
import menuTemplate from './templates/menu-template.hbs';
import menuList from './menu.json';

console.log(menuTemplate);
console.log(menuList);

const menuGrid = document.querySelector('.js-menu');
const markup = menuList.map(menuTemplate).join('');
menuGrid.insertAdjacentHTML('beforeend', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const refs = {
  toolbar: document.querySelector('#theme-switch-toggle'),
};
function changeToLight(e) {
  if (e.target.checked === true) {
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
if (!localStorage.theme) localStorage.theme = Theme.LIGHT;
refs.toolbar.addEventListener('change', changeToLight);

function changeOfLocalStorage() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    refs.toolbar.checked = true;
    document.body.classList.remove('dark-theme');
    document.body.classList.add('dark-theme');
  }
}
changeOfLocalStorage();
console.dir(refs.toolbar);
