import elementConstructor from '../elementConstructorFunction';

const statisticButtons = (parentBlock) => {
  const buttonReset = elementConstructor('button', 'statistic-table-button-reset', ['data-id', 'reset']);
  buttonReset.innerText = 'Delete all statistic';

  const buttonTrainDifficultWords = elementConstructor('button', 'statistic-table-button-train', ['data-id', 'train']);
  buttonTrainDifficultWords.innerText = 'Train hard words';

  parentBlock.append(buttonReset, buttonTrainDifficultWords);
};

export default statisticButtons;
