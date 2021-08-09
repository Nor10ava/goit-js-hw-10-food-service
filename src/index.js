import './styles.css';
import menuTemplate from './templates/menu-template.hbs';
import menuList from './menu.json';

console.log(menuTemplate);
console.log(menuList);

const menuGrid = document.querySelector('.js-menu');
const markup = menuList.map(menuTemplate).join('');
menuGrid.insertAdjacentHTML('beforeend', markup);
