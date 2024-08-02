const css = /*css*/`
  @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css);
  :host {
    border-radius: 50px;
    background-color: #eeeeee;
    padding: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  :host([hidden]) {
    display: none;
  }

  :host(:focus-within){
    background-color: #f1f1f1;
  }

  .input-box {
    border: none;
    outline: none;
    background-color: transparent;
    color: #333333;
  }

  .icon {
    color: #aca3a3;
    font-size: 10px;
  }

  button {
    border: none;
    outline: none;
    width: max-content;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
  }

  button:hover {
    background-color: #d8d7d7;
  }

  button:active {
    transform: scale(0.85);
  }
`;
export default () => /*html*/`<style>${css}</style>`;