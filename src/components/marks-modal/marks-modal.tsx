import { Component, Host, h, Prop, getAssetPath, State, EventEmitter, Event } from '@stencil/core';

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
  @Prop() header: string;
  @Prop() appearance: string;
  @Prop() buttons: string;

  @State() _buttons: Array<any>;

  arrayDataWatcher(buttons) {
    if(typeof buttons === 'string') {
      this._buttons = JSON.parse(buttons);
    } else {
      this._buttons = buttons;
    }
  }

  @Event() private action: EventEmitter;

  componentWillLoad() {
    this.arrayDataWatcher(this.buttons);
  }

  private handleCancel = () => {
    this.isopen = false;
  };

  private handleAction = () => {
    this.action.emit();
    alert('Request');
    console.log('press from marks-modal.tsx')
  };

  render() {
    return (
      <div class={this.isopen ? 'modal-wrapper isopen' : 'modal-wrapper'}>
        <div class="modal-overlay" onClick={this.handleCancel}/>
        <div class="modal">
          <div class="header">
            <h6>{this.header}</h6>
            <div class="close" onClick={this.handleCancel}>
              <img src={getAssetPath(`./assets/${this.closeIcon}`)} alt="close icon" />
            </div>
          </div>
          <div class="body">
            <slot />
          </div>
          <div class="footer">
            {this._buttons.map((button, index) => (
              <marks-button 
                onClick={index === 0 ? this.handleAction : this.handleCancel} 
                text={button.text} 
                appearance={index === 0 && this.appearance} />
            ))}
          </div>
        </div>
      </div>
    );
  }

}
