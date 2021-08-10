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
function changeTheme(e) {
  //   e.preventDefault();
  document.body.classList.toggle('dark-theme');
}
// refs.toolbar.addEventListener('change', () => {
//   document.body.classList.toggle('dark-theme');
// });

refs.toolbar.addEventListener('change', changeTheme);
// refs.toolbar.addEventListener('checked', changeThemeToDark);
// localStorage.setItem('theme', JSON.stringify(Theme));
// console.log(localStorage.getItem('Theme'));
