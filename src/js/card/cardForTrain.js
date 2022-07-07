import cards from '../../cards';

const createCardForTrain = (index) => {
  const cardCollection = [];
  for (let i = 0; i < cards[index].length; i += 1) {
    const card = `
      <div class="card card-train" data-id="${index}">
        <div class="card-train-container">
          <div class="card-train-front">
            <img class="front" src="${cards[index][i].image}" alt="${cards[index][i].word}" data-play="${cards[index][i].audioSrc}">
            <p class="card-train-title">${cards[index][i].word}</p>
            <p class="card-train-rotate">
              <img src="src/cards/images/rotate.png" class="card-rotate" alt="rotate">
            </p>
          </div>
          <div class="card-train-back">
            <img src="${cards[index][i].image}" alt="${cards[index][i].translation}">
            <p class="card-train-title">${cards[index][i].translation}</p>
          </div>
        </div>
      </div>
    `;
    cardCollection.push(card);
  }
  return cardCollection;
};

export default createCardForTrain;
