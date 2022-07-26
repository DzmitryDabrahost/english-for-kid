const changeStat = (index, id, mode) => {
  const alllcards = JSON.parse(localStorage.getItem('cards'));
  alllcards[index][id][mode] += 1;
  localStorage.setItem('cards', JSON.stringify(alllcards));
};

export default changeStat;
