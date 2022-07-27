/* eslint-disable quotes */
import elementConstructor from './elementConstructorFunction';
import cards from '../cards.js';

const createNavigationTemplate = () => {
  const navigationWrapper = elementConstructor('nav', 'navigation');
  for (let i = 0; i < cards[0].length; i += 1) {
    const navigationElement = `<a href="#" class="navigation-link" data-id="${i + 1}">${cards[0][i]}</a>`;
    navigationWrapper.insertAdjacentHTML('beforeend', navigationElement);
  }

  const mainPagesLink = `<a href="#" class="navigation-link navigation-link-active" data-id="main">main page</a>`;
  const statistic = `<a href="#" class="navigation-link" data-id="statistic">statistic</a>`;

  navigationWrapper.insertAdjacentHTML('afterbegin', mainPagesLink);
  navigationWrapper.insertAdjacentHTML('beforeend', statistic);
  document.body.appendChild(navigationWrapper);
};

export default createNavigationTemplate;
