import template from "./template.js";

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
        const dataButton = this.dataset.button;
        let context = {};

        switch (dataButton) {
            case "save":
                context = {
                    icon: IconButton.supportedIcons.save,
                    text: "Save Changes",
                };
                break;
            case "view-more":
                context = {
                    icon: IconButton.supportedIcons.book,
                    text: "View More",
                };
                break;
            case "remove":
                context = {
                    icon: IconButton.supportedIcons["trash-bin"],
                    text: "Remove Item",
                };
                break;
        }

        this.shadowRoot.innerHTML = template(context);
    }
}

customElements.define("icon-button", IconButton);