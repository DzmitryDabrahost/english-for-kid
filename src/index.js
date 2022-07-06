import headerCreateTemplate from './js/header';
import createNavigationTemplate from './js/navigation';
import createCardCategory from './js/card';

const title = 'English for kids';
headerCreateTemplate(title);
createNavigationTemplate();
createCardCategory();

const headerMenu = document.querySelector('.header-menu');
const headerLine = document.querySelector('.header-menu-line');
const checkboxToggle = document.querySelector('.header-toggle');
const checkboxSquare = document.querySelector('.header-toggle-square');
const navigation = document.querySelector('.navigation');

document.addEventListener('click', (event) => {
  const { target } = event;

  switch (target) {
    case headerMenu:
    case headerLine:
      headerMenu.classList.toggle('header-menu-active');
      navigation.classList.toggle('navigation-active');
      break;
    case checkboxToggle:
    case checkboxSquare:
      checkboxToggle.classList.toggle('header-toggle-active');
      break;
    default:
  }
});
