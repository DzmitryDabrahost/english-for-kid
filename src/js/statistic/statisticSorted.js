/* eslint-disable no-lonely-if */
const statisticSorted = (parent, headers, index, isActive) => {
  const parentBlock = parent;
  const allCellForSorting = document.querySelectorAll('tr');
  const array = Array.from(allCellForSorting);
  let cells;
  if (index < 3) {
    if (isActive) {
      cells = array.sort((a, b) => (a.cells[index].innerText > b.cells[index].innerText ? 1 : -1));
    } else {
      cells = array.sort((a, b) => (a.cells[index].innerText < b.cells[index].innerText ? 1 : -1));
    }
  } else {
    if (isActive) {
      cells = array.sort((a, b) => a.cells[index].innerText - b.cells[index].innerText);
    } else {
      cells = array.sort((a, b) => b.cells[index].innerText - a.cells[index].innerText);
    }
  }
  parentBlock.innerHTML = '';
  parentBlock.appendChild(headers);
  parentBlock.append(...cells);
};

export default statisticSorted;
