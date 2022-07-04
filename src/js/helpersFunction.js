const elementConstructor = (element, className) => {
  const elem = document.createElement(element);
  elem.classList.add(className);
  return elem;
};

export default elementConstructor;
