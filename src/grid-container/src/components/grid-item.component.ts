const template = require("./grid-item.component.html");
const styles = require("./grid-item.component.scss");

export class GridItemComponent extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.innerHTML = `<style>${styles}</style> ${template}`;
    }

    static get observedAttributes() {
        return ['area', 'row', 'column'];
    }

    get area() {
        return this.hasAttribute('area');
    }

    set area(val:any) {
        if (val) {
            this.setAttribute('area', val);
        } else {
            this.removeAttribute('area');
        }
    }

    get row() {
        return this.hasAttribute('row');
    }

    set row(val:any) {
        if (val) {
            this.setAttribute('row', val);
        } else {
            this.removeAttribute('row');
        }
    }

    get column() {
        return this.hasAttribute('column');
    }

    set column(val:any) {
        if (val) {
            this.setAttribute('column', val);
        } else {
            this.removeAttribute('column');
        }
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === 'area') {
            this.style.setProperty('--area', newVal);
        }
        if (name === 'row') {
            this.style.setProperty('--row', newVal);
        }
        if (name === 'column') {
            this.style.setProperty('--column', newVal);
        }
    }
}

customElements.define(`ce-grid-item`, GridItemComponent);
