const createCardForTrain = (index) => {
  const cards = JSON.parse(localStorage.getItem('cards'));
  const cardCollection = [];
  for (let i = 0; i < cards[index].length; i += 1) {
    const card = `
      <div class="card card-train" data-id="${cards[index][i].id}">
        <div class="card-train-container">
          <div class="card-train-front">
            <img class="front" src="${cards[index][i].image}" alt="${cards[index][i].word}" data-index="${index}" data-id="${i}" data-play="${cards[index][i].audioSrc}">
            <p class="card-train-title">${cards[index][i].word}</p>
            <p class="card-train-rotate">
              <img src="src/cards/images/rotate.png" data-index="${index}" data-id="${i}" class="card-rotate" alt="rotate">
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
