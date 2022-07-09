/* eslint-disable no-return-assign */
import createCardForTrain from './cardForTrain';

const createCardsToChoises = (parent, index) => {
  const collect = createCardForTrain(index);
  const cardContainer = parent;
  cardContainer.innerHTML = '';
  collect.forEach((element) => {
    cardContainer.innerHTML += element;
  });
};

export default createCardsToChoises;
