export default ({ icon, variant }) => `
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" />
    <link rel="stylesheet" href="/components/icon-button/styles.css" />
    <style>
        :host {
            --button-bg-active: var(--button-bg-${variant});
        }
    </style>
    <button type="button" class="button">
        <i class="icon ${icon}"></i>
        <span class="text"><slot></slot></span>
    </button>
`;