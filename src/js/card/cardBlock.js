import elementConstructor from '../elementConstructorFunction';
import startGameButton from './buttonPlay';
import createStartPositionCards from './cardStartPosition';

const createCardCategory = () => {
  if (document.querySelector('.section-card')) {
    document.querySelector('.section-card').remove();
  }
  const wrapper = elementConstructor('div', 'wrapper');
  const sectionCard = elementConstructor('section', 'section-card');
  const cardBlock = elementConstructor('div', 'card-contain');
  const starBlock = elementConstructor('div', 'card-stars');
  sectionCard.appendChild(wrapper);
  document.body.append(sectionCard);
  wrapper.append(starBlock, cardBlock);
  createStartPositionCards(cardBlock);

  wrapper.innerHTML += startGameButton;
};

export default createCardCategory;
