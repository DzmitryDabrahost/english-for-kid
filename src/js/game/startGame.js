/* eslint-disable no-restricted-globals */
import elementConstructor from '../elementConstructorFunction';

const getAllCardSounds = (allCardSounds) => {
  const sounds = [];
  let countErrors = 0;
  const starBlock = document.querySelector('.card-stars');

  const createArrayWithAllSounds = () => {
    allCardSounds.forEach((element) => {
      sounds.push(element.dataset.play);
    });
  };

  createArrayWithAllSounds();

  const getRandomSound = (cards) => {
    const randomCount = Math.floor(Math.random() * (cards.length));
    return randomCount;
  };

  const createAudio = (arr) => {
    const audio = new Audio();
    localStorage.setItem('audio', arr[getRandomSound(arr)]);
    audio.src = localStorage.getItem('audio');
    return audio;
  };

  const createFinishScreen = () => {
    let finishScreen;
    if (countErrors > 0) {
      finishScreen = elementConstructor('img', 'screen-finish', ['src', 'src/cards/images/finishwrong.png']);
    } else {
      finishScreen = elementConstructor('img', 'screen-finish', ['src', 'src/cards/images/goodjob.png']);
    }
    return finishScreen;
  };

  const startNewGame = () => {
    setTimeout(() => {
      localStorage.clear();
      location.reload();
    }, 4000);
  };

  const finishMessage = () => {
    const message = elementConstructor('h2', 'finish-message');
    message.innerText = `You have a ${countErrors} mistakes`;
    return countErrors > 0 ? message : '';
  };

  const removeUnnecessaryElement = (element) => {
    if (sounds.length - 1) {
      sounds.splice(sounds.indexOf(element), 1);
      createAudio(sounds).play();
    } else {
      const mainBlock = document.querySelector('.section-card');
      const img = createFinishScreen();
      const message = finishMessage();
      mainBlock.innerHTML = '';
      mainBlock.append(img, message);
      startNewGame();
    }
  };

  createAudio(sounds).play();

  const repeatAudio = () => {
    const audio = new Audio();
    audio.src = localStorage.getItem('audio');
    audio.play();
  };

  const createStarElement = () => {
    const starElement = elementConstructor('img', 'card-star-full', ['src', 'src/cards/images/star.png']);
    return starElement;
  };

  const createEmptyStarElement = () => {
    const starEmptyElement = elementConstructor('img', 'card-star-full', ['src', 'src/cards/images/emptystar.png']);
    return starEmptyElement;
  };

  document.addEventListener(('click'), (event) => {
    const { target } = event;

    if (target.classList.contains('card-play-button-active')) {
      repeatAudio();
    }

    if (target.classList.contains('img-play')
      && !target.classList.contains('invisibility')) {
      const audioPath = localStorage.getItem('audio');

      if (audioPath.indexOf(target.dataset.play.slice(2)) > 0) {
        target.classList.add('invisibility');
        starBlock.insertAdjacentElement('afterbegin', createStarElement());
        const correctAudio = new Audio();
        correctAudio.src = 'src/cards/sounds/correct.mp3';
        correctAudio.play();
        removeUnnecessaryElement(audioPath);
      } else {
        countErrors += 1;
        starBlock.insertAdjacentElement('afterbegin', createEmptyStarElement());
        const errorAudio = new Audio();
        errorAudio.src = 'src/cards/sounds/error.mp3';
        errorAudio.play();
      }
    }
  });
};

export default getAllCardSounds;
