/* eslint-disable no-unused-expressions */
/* eslint-disable no-return-assign */
import createCardForTrain from './cardForTrain';
import cardPlayTemplate from './cardPlayMode';

const createCardsToChoises = (parent, index, isGame) => {
  const button = document.querySelector('.card-play-button');

  const collect = !isGame ? createCardForTrain(index) : cardPlayTemplate(index);
  isGame ? button.classList.remove('none') : button.classList.add('none');
  const cardContainer = parent;
  cardContainer.innerHTML = '';
  collect.forEach((element) => {
    cardContainer.innerHTML += element;
  });
};

export default createCardsToChoises;
