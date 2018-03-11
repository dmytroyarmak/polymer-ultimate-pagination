import { Element as PolymerElement } from '@polymer/polymer/polymer-element';

export class UltimatePagination extends PolymerElement {
  static get is() { return 'ultimate-pagination'; }

  static get template() {
    return `
      <pre>
        ultimate-pagination
        currentPage: [[currentPage]]
        totalPages: [[totalPages]]
      </pre>
    `;
  }

  static get properties() {
    return {
      currentPage: {
        Type: Number
      },
      totalPages: {
        Type: Number
      }
    };
  }
}

customElements.define(UltimatePagination.is, UltimatePagination);
