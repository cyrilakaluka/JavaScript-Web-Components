export class StyledTable extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    /**
     * @param data {string[][]} 
     */
    set data(data) {
        const tbody = this.shadowRoot.querySelector('tbody');
        tbody.innerHTML = data.map(row => `
            <tr>
                ${row.map(column => `<td>${column}</td>`).join('')}
            </tr>
        `).join('');
    }

    async connectedCallback() {
        const headers = this.dataset.headers.split(',').map(x => x.trim());
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/components/styled-table/styled-table.css" />

            <table>
                <thead>
                    <tr>
                        ${headers.map(x => `<td>${x}</td>`).join('')}
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        `;
    }
};

customElements.define('styled-table', StyledTable);