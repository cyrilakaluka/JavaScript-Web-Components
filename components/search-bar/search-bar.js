import template from "./template.js";
import style from "./style.js";

class SearchBar extends HTMLElement {
  /**
   * Constructor
   */
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  /**
   * Connected Callback
   */
  connectedCallback() {
    const context = {
      placeholder: this.dataset.placeholder
    };

    this.shadowRoot.innerHTML = style(context) + template(context);

    this.$inputBox = this.shadowRoot.getElementById("input-box");
    this.$actionSearch = this.shadowRoot.getElementById("action-search");
    this.$actionClear = this.shadowRoot.getElementById("action-clear");

    this.$inputBox.addEventListener("input", this.handleInput.bind(this));
    this.$actionSearch.addEventListener("click", this.handleSearch.bind(this));
    this.$actionClear.addEventListener("click", this.handleClear.bind(this));
  }

  /**
   * Handle Search
   */
  handleSearch(ev) {
    this.dispatchEvent(new CustomEvent("perform-search", {
      detail: this.$inputBox.value
    }));
  }

  /**
   * Handle Clear
   */
  handleClear() {
    this.$inputBox.value = "";
    this.dispatchEvent(new CustomEvent("clear-search"));
  }

  /**
   * Handle Input
   */
  handleInput() {
    this.dispatchEvent(new CustomEvent("search-input", {
      detail: this.$inputBox.value
    }));
  }
}

customElements.define("search-bar", SearchBar);