import cards from '../../cards';

const createStartPositionCards = (parent) => {
  const parentBlock = !parent ? document.querySelector('.card-contain') : parent;
  parentBlock.innerHTML = '';
  for (let i = 1; i < cards.length; i += 1) {
    const div = `
        <div class="card card-category first" data-id="${i}">
            <img src="${cards[i][0].image}" data-id="${i}" class="first" alt="${cards[i][0].word}">
            <span class="card-category-title first" data-id="${i}">${cards[0][i - 1]}</span>
        </div>
    `;
    parentBlock.innerHTML += div;
  }
};

export default createStartPositionCards;
