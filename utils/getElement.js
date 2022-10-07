function getElement(selection) {
  const element = document.querySelector(selection);
  if (!element) throw new Error(`no such selector: ${selection}`);
  return element;
}

export default getElement;
