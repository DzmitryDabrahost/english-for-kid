const createStartPositionCards = (parent) => {
  const allCards = JSON.parse(localStorage.getItem('cards'));
  const parentBlock = !parent ? document.querySelector('.card-contain') : parent;
  parentBlock.innerHTML = '';
  for (let i = 1; i < allCards.length; i += 1) {
    const div = `
        <div class="card card-category first" data-id="${i}">
            <img src="${allCards[i][0].image}" data-id="${i}" class="first" alt="${allCards[i][0].word}">
            <span class="card-category-title first" data-id="${i}">${allCards[0][i - 1]}</span>
        </div>
    `;
    parentBlock.innerHTML += div;
  }
};

export default createStartPositionCards;
