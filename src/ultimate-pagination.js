import { Element, html } from '@polymer/polymer/polymer-element';
import '@polymer/polymer/lib/elements/dom-repeat';

import { getPaginationModel, ITEM_TYPES } from 'ultimate-pagination';

export class UltimatePagination extends Element {
  static get is() { return 'ultimate-pagination'; }

  static get template() {
    return html`
      <template is="dom-repeat" items="{{paginationModel}}">
        <button
          style$="[[getButtonStyle(item)]]"
          on-click="onClickPaginationButton"
        >[[getButtonText(item)]]</button>
      </template>
    `;
  }

  static get properties() {
    return {
      currentPage: {
        type: Number,
        notify: true
      },
      totalPages: {
        type: Number,
        notify: true
      },
      paginationModel: {
        type: Object,
        computed: 'computePaginationModel(currentPage, totalPages)'
      }
    };
  }

  computePaginationModel(currentPage, totalPages) {
    return getPaginationModel({ currentPage, totalPages });
  }

  onClickPaginationButton(event) {
    this.currentPage = event.model.item.value;
  }

  getButtonText(item) {
    switch(item.type) {
      case ITEM_TYPES.ELLIPSIS: return '...';
      case ITEM_TYPES.FIRST_PAGE_LINK: return 'First';
      case ITEM_TYPES.LAST_PAGE_LINK: return 'Last';
      case ITEM_TYPES.NEXT_PAGE_LINK: return 'Next';
      case ITEM_TYPES.PREVIOUS_PAGE_LINK: return 'Prev';
      default: return item.value;
    }
  }

  getButtonStyle(item) {
    return (
      (item.type === ITEM_TYPES.PAGE && item.value === this.currentPage)
        ? 'font-weight: bold'
        : ''
    );
  }
}

customElements.define(UltimatePagination.is, UltimatePagination);
