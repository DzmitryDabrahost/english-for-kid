import elementConstructor from './helpersFunction';
import cards from '../cards';

const createCardCategory = () => {
  const wrapper = elementConstructor('div', 'wrapper');
  const sectionCard = elementConstructor('section', 'section-card');
  const headerBlock = elementConstructor('div', 'card-contain');
  sectionCard.appendChild(wrapper);
  wrapper.appendChild(headerBlock);
  document.body.append(sectionCard);
  const button = `
      <button class="card-play-button none">Start game</button>
  `;
  for (let i = 0; i < cards.length - 1; i += 1) {
    const div = `
        <div class="card card-category" data-id="${i + 1}">
            <img src="${cards[i + 1][0].image}" alt="${cards[i + 1][0].word}">
            <span class="card-category-title">${cards[0][i]}</span>
        </div>
    `;
    headerBlock.innerHTML += div;
  }
  wrapper.innerHTML += button;
};

export default createCardCategory;
