import template from "./template.js";
import style from "./style.js";

class IconButton extends HTMLElement {
    static supportedIcons = {
        book: 'fa-solid fa-book-open',
        save: 'fa-solid fa-floppy-disk',
        "trash-bin": 'fa-solid fa-trash-can',
    };

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const dataIcon = this.dataset.icon;

        const context = {
            icon: IconButton.supportedIcons[dataIcon],
            variant: this.dataset.variant
        };

        this.shadowRoot.innerHTML = style(context) + template(context);
    }
}

customElements.define("icon-button", IconButton);