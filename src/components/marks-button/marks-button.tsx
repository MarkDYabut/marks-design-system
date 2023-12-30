import { Component, Host, h , Prop} from '@stencil/core';

@Component({
  tag: 'marks-button',
  styleUrl: 'marks-button.css',
  shadow: true,
})
export class MarksButton {

  @Prop() text: string;

  render() {
    return (
      <button class="btn" type="button">
        {this.text}
      </button>
    );
  }

}
