import headerCreateTemplate from './js/header';
import createNavigationTemplate from './js/navigation';
import createCardCategory from './js/card/cardBlock';
import createCardsToChoises from './js/card/createCards';
import createStartPositionCards from './js/card/cardStartPosition';
import changeNavigationLinks from './js/navigationLinksWatcher';

const title = 'English for kids';
let gameMode = false;
headerCreateTemplate(title);
createNavigationTemplate();
createCardCategory();

const headerMenu = document.querySelector('.header-menu');
const headerLine = document.querySelector('.header-menu-line');
const checkboxToggle = document.querySelector('.header-toggle');
const checkboxSquare = document.querySelector('.header-toggle-square');
const navigation = document.querySelector('.navigation');
const cardContainer = document.querySelector('.card-contain');
const navigationLinks = document.querySelectorAll('.navigation-link');

document.addEventListener('click', (event) => {
  const { target } = event;
  if (target.classList.contains('first')) {
    gameMode = true;
    changeNavigationLinks(navigationLinks, target.dataset.id);
    createCardsToChoises(cardContainer, target.dataset.id);
  }

  if (!target.classList.contains('header-menu')) {
    headerMenu.classList.remove('header-menu-active');
    navigation.classList.remove('navigation-active');
  }

  if (target.classList.contains('navigation-link')) {
    changeNavigationLinks(navigationLinks, target.dataset.id);

    if (target.dataset.id === 'main') {
      gameMode = false;
      createStartPositionCards();
    } else if (target.dataset.id === 'statistic') {
      gameMode = false;
    } else {
      gameMode = true;
      createCardsToChoises(cardContainer, target.dataset.id);
    }
  }

  if (target.classList.contains('front')) {
    const audio = new Audio();
    audio.src = target.dataset.play;
    audio.play();
  }

  if (target.classList.contains('card-rotate')) {
    const block = target.closest('div.card-train-container');
    block.classList.add('rotate');
    block.addEventListener('mouseleave', () => {
      block.classList.remove('rotate');
    });
  }

  switch (target) {
    case headerMenu:
    case headerLine:
      headerMenu.classList.toggle('header-menu-active');
      navigation.classList.toggle('navigation-active');
      break;
    case checkboxToggle:
    case checkboxSquare:
      if (gameMode) {
        checkboxToggle.classList.toggle('header-toggle-active');
      } else {
        document.querySelector('.header-toggle-message').classList.add('visible');
        setTimeout(() => {
          document.querySelector('.header-toggle-message').classList.remove('visible');
        }, 4000);
      }
      break;
    default:
  }
});
