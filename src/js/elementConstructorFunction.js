const elementConstructor = (element, className, ...dataAttribute) => {
  const elem = document.createElement(element);
  elem.classList.add(...className.split(' '));
  if (dataAttribute.length) {
    dataAttribute.forEach(([attrName, attrValue]) => {
      if (attrValue === '') {
        elem.setAttribute(attrName, '');
      }
      if (attrName.match(/value|id|placeholder|cols|rows|autocorrect|spellcheck/)) {
        elem.setAttribute(attrName, attrValue);
      } else {
        elem.dataset[attrName] = attrValue;
      }
    });
  }
  return elem;
};

export default elementConstructor;
