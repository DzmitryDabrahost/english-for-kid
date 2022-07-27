const statisticDifficultWords = () => {
  const allWords = JSON.parse(localStorage.getItem('cards')).slice(1).flat();
  const allDifficultWords = allWords.filter((element) => element.incorrect > 0);

  const createHardCardForTrain = () => {
    const collection = [];
    for (let i = 0; i < allDifficultWords.length; i += 1) {
      const card = `
        <div class="card card-train">
          <div class="card-train-container">
            <div class="card-train-front">
              <img class="front" src="${allDifficultWords[i].image}" alt="${allDifficultWords[i].word}" data-index="${i}" data-id="${i}" data-play="${allDifficultWords[i].audioSrc}">
              <p class="card-train-title">${allDifficultWords[i].word}</p>
              <p class="card-train-rotate">
                <img src="src/cards/images/rotate.png" data-index="${i}" data-id="${i}" class="card-rotate" alt="rotate">
              </p>
            </div>
            <div class="card-train-back">
              <img src="${allDifficultWords[i].image}" alt="${allDifficultWords[i].translation}">
              <p class="card-train-title">${allDifficultWords[i].translation}</p>
            </div>
          </div>
        </div>
      `;
      collection.push(card);
    }
    return collection;
  };

  createHardCardForTrain();
};

export default statisticDifficultWords;
