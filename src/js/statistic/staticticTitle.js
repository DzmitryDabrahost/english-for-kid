import elementConstructor from '../elementConstructorFunction';

const tableTitle = ['Categories', 'Words', 'Translation', 'Trained', 'Correct', 'Incorrect', 'Result (%)'];

const createTableHead = (parent) => {
  const titleTd = parent;
  tableTitle.forEach((title, index) => {
    const rubric = elementConstructor(
      'th',
      'statistic-table-title-head',
      ['index', index],
    );
    rubric.innerText = title;
    titleTd.appendChild(rubric);
  });
};

export default createTableHead;
