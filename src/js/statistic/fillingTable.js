const fillingTables = (parent) => {
  const array = JSON.parse(localStorage.getItem('cards'));
  for (let i = 0; i < array[0].length; i += 1) {
    for (let j = 0; j < array[0].length; j += 1) {
      const percent = Math.floor((array[i + 1][j].correct * 100)
       / (array[i + 1][j].correct + array[i + 1][j].incorrect));
      const row = `
        <tr class="statistic-table-row">
          <td class="statistic-table-ceil">${array[0][i]}</td>
          <td class="statistic-table-ceil">${array[i + 1][j].word}</td>
          <td class="statistic-table-ceil">${array[i + 1][j].translation}</td>
          <td class="statistic-table-ceil text-center">${array[i + 1][j].trained}</td>
          <td class="statistic-table-ceil text-center">${array[i + 1][j].correct}</td>
          <td class="statistic-table-ceil text-center">${array[i + 1][j].incorrect}</td>
          <td class="statistic-table-ceil text-center">${Number.isNaN(+percent) ? 0 : percent}</td>
        </tr>
      `;
      parent.insertAdjacentHTML('beforeend', row);
    }
  }
};

export default fillingTables;
