import cards from '../../cards';

const createStartPositionCards = (parent) => {
  const parentBlock = parent;
  for (let i = 1; i < cards.length; i += 1) {
    const div = `
        <div class="card card-category" data-id="${i}">
            <img src="${cards[i][0].image}" alt="${cards[i][0].word}">
            <span class="card-category-title">${cards[0][i - 1]}</span>
        </div>
    `;
    parentBlock.innerHTML += div;
  }
};

export default createStartPositionCards;
