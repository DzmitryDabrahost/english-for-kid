import elementConstructor from '../elementConstructorFunction';
import startGameButton from './buttonPlay';
import createStartPositionCards from './cardStartPosition';

const createCardCategory = () => {
  const wrapper = elementConstructor('div', 'wrapper');
  const sectionCard = elementConstructor('section', 'section-card');
  const cardBlock = elementConstructor('div', 'card-contain');
  sectionCard.appendChild(wrapper);
  document.body.append(sectionCard);
  wrapper.appendChild(cardBlock);
  createStartPositionCards(cardBlock);

  wrapper.innerHTML += startGameButton;
};

export default createCardCategory;
