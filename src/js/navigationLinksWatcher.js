const changeNavigationLinks = (navigationLinks, target) => {
  navigationLinks.forEach((link) => {
    link.classList.remove('navigation-link-active');
    if (link.dataset.id === target) {
      link.classList.add('navigation-link-active');
    }
  });
};

export default changeNavigationLinks;
