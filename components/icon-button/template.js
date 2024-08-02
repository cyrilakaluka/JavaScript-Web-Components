export default ({ icon }) => /*html*/`
    <button type="button" class="button">
        <i class="icon ${icon}"></i>
        <span class="text"><slot></slot></span>
    </button>
`;