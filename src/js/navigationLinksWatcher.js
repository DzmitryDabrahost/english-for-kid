const changeNavigationLinks = (navigationLinks, target) => {
  const button = document.querySelector('.card-play-button');
  const toggle = document.querySelector('.header-toggle');
  const navigation = document.querySelector('.navigation');

  if (toggle.classList.contains('header-toggle-active')) {
    button.classList.remove('card-play-button-active');
    toggle.classList.remove('header-toggle-active');
    navigation.classList.remove('toggle-red');
  }

  navigationLinks.forEach((link) => {
    link.classList.remove('navigation-link-active');
    if (link.dataset.id === target) {
      link.classList.add('navigation-link-active');
    }
  });
};

export default changeNavigationLinks;
