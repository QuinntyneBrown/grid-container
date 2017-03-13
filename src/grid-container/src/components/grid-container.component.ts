const template = require("./grid-container.component.html");
const styles = require("./grid-container.component.scss");

export class GridContainerComponent extends HTMLElement {
    constructor() {
        super();
        const shadowRoot = this.attachShadow({ mode: 'open' });
    }
    
    connectedCallback() {
        this.innerHTML = `<style>${styles}</style> ${template}`;
    }

    static get observedAttributes() {
        return ['gutter', 'areas'];
    }

    get areas() {
        return this.hasAttribute('areas');
    }

    set areas(val:any) {
        if (val) {
            this.setAttribute('areas', val);
        } else {
            this.removeAttribute('areas');
        }
    }

    get gutter() {
        return this.hasAttribute('gutter');
    }

    set gutter(val:any) {
        if (val) {
            this.setAttribute('gutter', val);
        } else {
            this.removeAttribute('gutter');
        }
    }

    attributeChangedCallback(name, oldVal, newVal) {
        if (name === 'gutter') {
            this.style.setProperty('--gutter', newVal);
        }

        if (name === 'areas') {
            this.style.setProperty('--areas', newVal);
        }
    }
}

customElements.define(`ce-grid-container`,GridContainerComponent);
