export default ({ placeholder } = {}) => /*html*/`
  <button id="action-search"><i class="icon fa-solid fa-magnifying-glass"></i></button>
  <input id="input-box" class="input-box" type="text" placeholder="${placeholder || ''}">
  <button id="action-clear"><i class="icon fa-solid fa-xmark"></i></button>
`;