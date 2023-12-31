import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'marks-button',
  styleUrl: 'marks-button.css',
  shadow: true,
})
export class MarksButton {

  @Prop() text: string;
  @Prop() appearance: string;
  @Prop() loader: boolean;

  render() {
    return (
      <button class={`btn ${this.appearance}`} type="button">
        {this.text}
        {/* {this.loader ? <marks-spinner type="circle" color="green"></marks-spinner> : <div></div>} */}
      </button>
    );
  }

}
