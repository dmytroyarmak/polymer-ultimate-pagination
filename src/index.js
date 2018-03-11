import '@webcomponents/webcomponentsjs';
import { Element, html } from '@polymer/polymer/polymer-element';

import './ultimate-pagination';

export class UltimatePaginationDemo extends Element {
  static get is() { return 'ultimate-pagination-demo'; }

  static get template() {
    return html`
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
        <div>
          <label for="is-disabled-checkbox">Disabled</label>
          <input id="is-disabled-checkbox" type="checkbox" checked="{{disabled::change}}" />
        </div>
      </fieldset>

      <fieldset>
        <legend>Component</legend>
        <ultimate-pagination
          current-page="{{currentPage}}"
          total-pages="{{totalPages}}"
          disabled="[[disabled]]"
        ></ultimate-pagination>
      </fieldset>
    `;
  }

  constructor() {
    super();
    this.currentPage = 1;
    this.totalPages = 10;
    this.disabled = false;
  }
}

customElements.define(UltimatePaginationDemo.is, UltimatePaginationDemo);
