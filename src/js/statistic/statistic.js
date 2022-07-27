import cards from '../../cards';
import elementConstructor from '../elementConstructorFunction';
import fillingTables from './fillingTable';
import createTableHead from './staticticTitle';
import statisticButtons from './statisticButtons';
import statisticDifficultWords from './statisticDifficultWords';
import statisticSorted from './statisticSorted';

const createStatisticTemplate = () => {
  const table = elementConstructor('table', 'statistic-table');
  const wrapper = document.querySelector('.card-contain');
  const tableHeaders = elementConstructor('thead', 'statistic-table-title');
  const starsBlock = document.querySelector('.card-stars');
  const buttonsBlock = elementConstructor('div', 'statistic-table-button');
  starsBlock.appendChild(buttonsBlock);

  statisticButtons(buttonsBlock);
  createTableHead(tableHeaders);

  table.appendChild(tableHeaders);
  fillingTables(table);
  wrapper.innerHTML = '';
  wrapper.appendChild(table);

  buttonsBlock.addEventListener('click', (event) => {
    const { target } = event;

    if (target.dataset.id === 'train') {
      console.log('пока не сделал');
      statisticDifficultWords();
    }

    if (target.dataset.id === 'reset') {
      localStorage.removeItem('cards');
      localStorage.setItem('cards', JSON.stringify(cards));
      table.innerHTML = '';
      table.appendChild(tableHeaders);
      fillingTables(table);
      const allTitle = document.querySelectorAll('.statistic-table-title-head');
      allTitle.forEach((element) => element.classList.remove('toggle-red'));
    }
  });

  tableHeaders.addEventListener('click', (event) => {
    const { target } = event;
    const isActive = target.classList.contains('toggle-red');
    const allTitle = document.querySelectorAll('.statistic-table-title-head');
    allTitle.forEach((element) => element.classList.remove('toggle-red'));
    target.classList.add('toggle-red');
    statisticSorted(table, tableHeaders, target.dataset.index, isActive);
  });
};

export default createStatisticTemplate;
