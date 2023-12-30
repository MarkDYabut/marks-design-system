import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'marks-modal',
  styleUrl: 'marks-modal.css',
  shadow: true,
})
export class MarksModal {

  render() {
    return (
      <div class="modal-wrapper">
        <div class="modal-overlay" />
        <div class="modal">
          <div class="header">
            <h6>Modal Header</h6>
            <div class="close">{/* Return x svg */}</div>
          </div>
          <div class="body">
            <slot />
          </div>
          <div class="footer">
            <apollo-button text="confirm" appearance="primary"></apollo-button>
          </div>
        </div>
      </div>
    );
  }

}
