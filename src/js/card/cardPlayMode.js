import cards from '../../cards';

const cardPlayTemplate = (count) => {
  const collectionCard = [];
  for (let i = 0; i < cards[count].length; i += 1) {
    const card = `
      <div class="card card-play" data-id="${count}" data-play="${cards[count][i].audioSrc}">
          <img data-play="${cards[count][i].audioSrc}" class="img-play" src="${cards[count][i].image}" alt="${cards[count][i].word}">
      </div>
    `;
    collectionCard.push(card);
  }

  return collectionCard;
};

export default cardPlayTemplate;
