/* eslint-disable no-return-assign */
import headerCreateTemplate from './js/header';
import createNavigationTemplate from './js/navigation';
import createCardCategory from './js/card/cardBlock';
import createCardForTrain from './js/card/cardForTrain';

const title = 'English for kids';
headerCreateTemplate(title);
createNavigationTemplate();
createCardCategory();

const headerMenu = document.querySelector('.header-menu');
const headerLine = document.querySelector('.header-menu-line');
const checkboxToggle = document.querySelector('.header-toggle');
const checkboxSquare = document.querySelector('.header-toggle-square');
const navigation = document.querySelector('.navigation');
const allCards = document.querySelectorAll('.card');
const cardContainer = document.querySelector('.card-contain');

allCards.forEach((item) => {
  item.addEventListener('click', () => {
    const collect = createCardForTrain(item.dataset.id);
    cardContainer.innerHTML = '';
    collect.forEach((element) => cardContainer.innerHTML += element);
  });
});

document.addEventListener('click', (event) => {
  const { target } = event;

  if (!target.classList.contains('header-menu')) {
    headerMenu.classList.remove('header-menu-active');
    navigation.classList.remove('navigation-active');
  }

  if (target.classList.contains('navigation-link')) {
    console.log(target.dataset.id);
  }
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
