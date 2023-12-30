import { Component, Host, h , Prop} from '@stencil/core';

@Component({
  tag: 'marks-button',
  styleUrl: 'marks-button.css',
  shadow: true,
})
export class MarksButton {

  @Prop() text: string;
  @Prop() appearance: string;

  render() {
    return (
      <button class={`btn ${this.appearance}`} type="button">
        {this.text}
      </button>
    );
  }

}
