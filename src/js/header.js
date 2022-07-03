const createHeaderTemplate = (mainName) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  document.body.prepend(wrapper);


  const header = document.createElement('header');
  header.classList.add('header');

  const headerMenu = document.createElement('div');
  headerMenu.classList.add('header-menu');

  const headerMenuBurgerLine = document.createElement('span');
  headerMenuBurgerLine.classList.add('header-menu-line');
  headerMenu.appendChild(headerMenuBurgerLine);

  const headerTitle = document.createElement('h1');
  headerTitle.classList.add('header-title');
  headerTitle.innerHTML = `<a href="#">${mainName}</a>`;

  const headerToggle = document.createElement('div');
  headerToggle.classList.add('header-toggle');

  const headerToggleSquare = document.createElement('span');
  headerToggleSquare.classList.add('header-toggle-square');
  headerToggle.appendChild(headerToggleSquare);

  header.append(headerMenu, headerTitle, headerToggle);
  wrapper.appendChild(header);
}

export default createHeaderTemplate;
