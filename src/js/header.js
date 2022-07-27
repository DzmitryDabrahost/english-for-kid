import elementConstructor from './elementConstructorFunction';

const createHeaderTemplate = (mainName) => {
  const headerWrapper = elementConstructor('div', 'header-wrapper');
  document.body.prepend(headerWrapper);

  const header = elementConstructor('header', 'header');

  const headerMenu = elementConstructor('div', 'header-menu');

  const headerMenuBurgerLine = elementConstructor('span', 'header-menu-line');
  headerMenu.appendChild(headerMenuBurgerLine);

  const headerTitle = elementConstructor('h1', 'header-title');
  headerTitle.innerHTML = `<a href="#">${mainName}</a>`;

  const headerToggle = elementConstructor('div', 'header-toggle');
  const errorMessage = elementConstructor('div', ('header-toggle-message'));
  errorMessage.innerText = 'Firstly choose a category';

  const headerToggleSquare = elementConstructor('span', 'header-toggle-square');
  headerToggle.append(headerToggleSquare, errorMessage);

  header.append(headerMenu, headerTitle, headerToggle);
  headerWrapper.appendChild(header);
};

export default createHeaderTemplate;
