import '@webcomponents/webcomponentsjs';
import { Element as PolymerElement } from '@polymer/polymer/polymer-element';

import './ultimate-pagination';

export class UltimatePaginationDemo extends PolymerElement {
  static get is() { return 'ultimate-pagination-demo'; }

  static get template() {
    return `
      <h1>polymer-ultimate-pagination</h1>
      <fieldset>
        <legend>Configuration</legend>
        <div>
          <label for="current-page-input">Current page</label>
          <input id="current-page-input" type="number" value="{{currentPage::input}}" />
        </div>
        <div>
          <label for="total-pages-input">Total pages</label>
          <input id="total-pages-input" type="number" value="{{totalPages::input}}" />
        </div>
      </fieldset>

      <fieldset>
        <legend>Component</legend>
        <ultimate-pagination
          current-page="[[currentPage]]"
          total-pages="[[totalPages]]"
        ></ultimate-pagination>
      </fieldset>
    `;
  }

  constructor() {
    super();
    this.currentPage = 1;
    this.totalPages = 10;
  }
}

customElements.define(UltimatePaginationDemo.is, UltimatePaginationDemo);
