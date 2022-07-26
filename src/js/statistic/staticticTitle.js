import elementConstructor from '../elementConstructorFunction';

const tableTitle = ['Categories', 'Words', 'Translation', 'Trained', 'Correct', 'Incorrect', 'Wrong (%)'];

const createTableHead = (parent) => {
  const titleTd = parent;
  tableTitle.forEach((title) => {
    const rubric = elementConstructor('th', 'statistic-table-title-head');
    rubric.innerText = title;
    titleTd.appendChild(rubric);
  });
};

export default createTableHead;
