import elementConstructor from '../elementConstructorFunction';
import fillingTables from './fillingTable';
import createTableHead from './staticticTitle';

const createStatisticTemplate = () => {
  const table = elementConstructor('table', 'statistic-table');
  const wrapper = document.querySelector('.card-contain');
  const tableHeaders = elementConstructor('thead', 'statistic-table-title');

  createTableHead(tableHeaders);

  table.appendChild(tableHeaders);
  fillingTables(table);
  wrapper.innerHTML = '';
  wrapper.appendChild(table);
};

export default createStatisticTemplate;
