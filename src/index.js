import headerCreateTemplate from './js/header';
import createNavigationTemplate from './js/navigation';
import createCardCategory from './js/card/cardBlock';
import createCardsToChoises from './js/card/createCards';
import createStartPositionCards from './js/card/cardStartPosition';
import changeNavigationLinks from './js/navigationLinksWatcher';
import getAllCardSounds from './js/game/startGame';
import createStatisticTemplate from './js/statistic/statistic';
import cards from './cards';
import changeStat from './js/statistic/changeStat';

const title = 'English for kids';
let gameMode = false;
let index;

if (!localStorage.getItem('cards')) {
  localStorage.setItem('cards', JSON.stringify(cards));
}

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
const button = document.querySelector('.card-play-button');

document.addEventListener('click', (event) => {
  const { target } = event;

  if (target.dataset.id) {
    index = target.dataset.id;
  }

  if (target.classList.contains('first')) {
    gameMode = true;
    changeNavigationLinks(navigationLinks, index);
    createCardsToChoises(cardContainer, index, false);
  }

  if (!target.classList.contains('header-menu')) {
    headerMenu.classList.remove('header-menu-active');
    navigation.classList.remove('navigation-active');
  }

  if (target.classList.contains('navigation-link')) {
    changeNavigationLinks(navigationLinks, index);

    if (target.dataset.id === 'main') {
      gameMode = false;
      createStartPositionCards();
    } else if (target.dataset.id === 'statistic') {
      gameMode = false;
      createStatisticTemplate();
    } else {
      gameMode = true;
      createCardsToChoises(cardContainer, index);
    }
  }

  if (target.classList.contains('front')) {
    changeStat(target.dataset.index, target.dataset.id, 'trained');
    const audio = new Audio();
    audio.src = target.dataset.play;
    audio.play();
  }

  if (target.classList.contains('card-rotate')) {
    changeStat(target.dataset.index, target.dataset.id, 'trained');
    const block = target.closest('div.card-train-container');
    block.classList.add('rotate');
    block.addEventListener('mouseleave', () => {
      block.classList.remove('rotate');
    });
  }

  if (target.classList.contains('card-play-button')
   && !target.classList.contains('card-play-button-active')) {
    target.classList.add('card-play-button-active');
    getAllCardSounds(document.querySelectorAll('.card'));
  }

  switch (target) {
    case headerMenu:
    case headerLine:
      headerMenu.classList.toggle('header-menu-active');
      navigation.classList.toggle('navigation-active');
      break;
    case checkboxToggle:
    case checkboxSquare:
      if (button.classList.contains('card-play-button-active')) {
        button.classList.remove('card-play-button-active');
      }
      if (gameMode) {
        checkboxToggle.classList.toggle('header-toggle-active');
        navigation.classList.toggle('toggle-red');
        if (checkboxToggle.classList.contains('header-toggle-active')) {
          createCardsToChoises(cardContainer, index, true);
        } else {
          createCardsToChoises(cardContainer, index, false);
        }
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
