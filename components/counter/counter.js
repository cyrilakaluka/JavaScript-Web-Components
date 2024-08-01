import template from './template.js';

class Counter extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }

    get count() {
        return this.getAttribute('count');
    }

    set count(newValue) {
        this.setAttribute('count', newValue);
    }

    static get observedAttributes() {
        return ['count'];
    }

    attributeChangedCallback(name) {
        if (name === 'count') {
            this.shadowRoot.querySelector('.counter').innerHTML = this.count;
        }
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = template();

        const incrementButton = this.shadowRoot.querySelector('.increment');
        const decrementButton = this.shadowRoot.querySelector('.decrement');

        incrementButton.addEventListener('click', () => {
            this.count++;
        });

        decrementButton.addEventListener('click', () => {
            this.count = Math.max(0, this.count - 1);
        });
    }
}

customElements.define('x-counter', Counter);