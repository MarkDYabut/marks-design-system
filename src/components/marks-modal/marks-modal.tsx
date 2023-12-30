import { Component, Host, h , Prop, getAssetPath} from '@stencil/core';

@Component({
  tag: 'marks-modal',
  styleUrl: 'marks-modal.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class MarksModal {

  @Prop({
    mutable: true,
    reflect: true,
  })
  @Prop() isopen: boolean;
  @Prop() closeIcon = 'x.svg';

  render() {
    return (
      <div class={this.isopen ? 'modal-wrapper isopen' : 'modal-wrapper'}>
        <div class="modal-overlay" />
        <div class="modal">
          <div class="header">
            <h6>Modal Header</h6>
            <div class="close">
              <img src={getAssetPath(`./assets/${this.closeIcon}`)} alt="close icon" />  
            </div>
          </div>
          <div class="body">
            <slot />
          </div>
          <div class="footer">
            <marks-button text="confirm" appearance="primary"></marks-button>
          </div>
        </div>
      </div>
    );
  }

}
