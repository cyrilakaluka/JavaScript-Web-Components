export default ({ variant }) => /*html*/`
<style>
  @import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css);
  :host {
    --button-bg-info: #2626b5;
    --button-bg-success: #0fab0f;
    --button-bg-warning: #e5e505;
    --button-bg-error: #e40505;
  }
  .button {
      font-size: 20px;
      padding: 20px 40px;
      border-radius: 50px;
      color: whitesmoke;
      border: none;
      outline: none;
      background-color: var(--button-bg-${variant || 'info'});
      display: flex;
      flex-direction: row;
      gap: 10px;
  }
  .icon {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      color: whitesmoke;
  }
</style>
`