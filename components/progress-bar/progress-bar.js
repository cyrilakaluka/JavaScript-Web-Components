class ProgressBar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    get progress() {
        const progress = this.getAttribute('progress');

        if (isNaN(progress)) return 0;

        return Math.min(100, Math.max(0, progress));
    }

    set progress(value) {
        this.setAttribute('progress', value);
    }

    static get observedAttributes() {
        return ['progress'];
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/components/progress-bar/progress-bar.css"/>
            <div class="fill"></div>
        `;
    }

    attributeChangedCallback(name) {
        if (name === 'progress') {
            const fill = this.shadowRoot.querySelector('.fill');
            if (fill) {
                fill.style.width = `${this.progress}%`;
            }
        }
    }
}

customElements.define('progress-bar', ProgressBar);