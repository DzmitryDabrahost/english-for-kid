import elementConstructor from "./helpersFunction.js";

const createHeaderTemplate = (mainName) => {
  const wrapper = elementConstructor('div', 'wrapper');
  document.body.prepend(wrapper);

  const header = elementConstructor('header', 'header');

  const headerMenu = elementConstructor('div', 'header-menu');

  const headerMenuBurgerLine = elementConstructor('span', 'header-menu-line');
  headerMenu.appendChild(headerMenuBurgerLine);

  const headerTitle = elementConstructor('h1', 'header-title');
  headerTitle.innerHTML = `<a href="#">${mainName}</a>`;

  const headerToggle = elementConstructor('div', 'header-toggle');

  const headerToggleSquare = elementConstructor('span', 'header-toggle-square');
  headerToggle.appendChild(headerToggleSquare);

  header.append(headerMenu, headerTitle, headerToggle);
  wrapper.appendChild(header);
}

export default createHeaderTemplate;
