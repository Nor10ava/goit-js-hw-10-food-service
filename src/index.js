import './styles.css';
import menuTemplate from './templates/menu-template.hbs';
import menuList from './menu.json';

console.log(menuTemplate);
console.log(menuList);

const menuGrid = document.querySelector('.js-menu');
const markup = menuList.map(menuTemplate).join('');
menuGrid.insertAdjacentHTML('beforeend', markup);

// const Theme = {
//   LIGHT: 'light-theme',
//   DARK: 'dark-theme',
// };
const refs = {
  toolbar: document.querySelector('#theme-switch-toggle'),
};
// function changeTheme(e) {
//   document.body.classList.toggle('dark-theme');
// }
// // refs.toolbar.addEventListener('change', () => {
// //   document.body.classList.toggle('dark-theme');
// // });
function changeToLight(e) {
  if (e.target.checked === true) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'DARK');
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'LIGHT');
  }
}
refs.toolbar.addEventListener('change', changeToLight);
// refs.toolbar.addEventListener('checked', changeThemeToDark);

console.dir(refs.toolbar);
// localStorage.setItem('list', changeTheme);
// toggleThemeBtn.onclick = () => {
// document.body.classList.toggle('dark-theme');
// toggleThemeBtn.innerText = document.body.classList.contains('dark-theme')
//   ? 'сменить тему на светлую'
//   : 'сменить тему на темную';
// localStorage.theme = document.body.className || 'light-theme';

// localStorage.setItem('theme', document.body.className || 'light-theme');
// if (!localStorage.theme) localStorage.theme = 'light';
console.dir(document.body);
// refs.toolbar.addEventListener('change', event => {
//   event.preventDefault();
//   if (localStorage.getItem('theme' === 'dark')) {
//     localStorage.removeItem('theme');
//   } else {
//     localStorage.setItem('theme', 'dark');
//   }
//   addDarkClassToHTML();
// });
// function addDarkClassToHTML() {
//   if (localStorage.getItem('theme') === 'dark') {
//     document.querySelector('body').classList.add('dark-theme');
//     // document.querySelector('.themetoggle span').textContent = "dark_mode";
//   } else {
//     document.querySelector('body').classList.remove('dark-theme');
//   }
// }
// storageChangeTheme();
