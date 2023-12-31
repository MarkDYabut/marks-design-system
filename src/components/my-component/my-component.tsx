import { Component, Prop, h, State } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  @State() data: any;
  @State() verseRef: any;
  @State() verse: any;

  private getVerse(): any {
    const VERSES = [
      `JER.29.11`,
      `PSA.23`,
      `1COR.4.4-8`,
      `PHP.4.13`,
      `JHN.3.16`,
      `ROM.8.28`,
      `ISA.41.10`,
      `PSA.46.1`,
      `GAL.5.22-23`,
      `HEB.11.1`,
      `2TI.1.7`,
      `1COR.10.13`,
      `PRO.22.6`,
      `ISA.40.31`,
      `JOS.1.9`,
      `HEB.12.2`,
      `MAT.11.28`,
      `ROM.10.9-10`,
      `PHP.2.3-4`,
      `MAT.5.43-44`,
    ];
    const verseIndex = Math.floor(Math.random() * VERSES.length);
    const verseID = VERSES[verseIndex];
    return verseID;
  }

  private attack(): any {
    const API_KEY = `f9ae003dfa0ee152613fcb7e981f7cb0`; // Fill in with your own key.
    const BIBLE_ID = `9879dbb7cfe39e4d-02`;
    const verseID = this.getVerse();
    const url = `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/search?query=${verseID}`

    fetch(url, {
      method: 'GET',
      // mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Api-Key': API_KEY
      }
    }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then((data) => {
        this.data = data.data;
        this.verse = data.data.passages[0].content;
        this.verseRef = data.data.passages[0].reference;

        console.log(this.verse);
        console.log(this.verseRef);
      });
  }

  componentWillLoad() {
    this.attack();
  }


  private handleAction = () => {
    this.attack();
  };

  render() {
    return (
      <div>
        <p>Hello, World! I'm {this.getText()}</p>
        <h3>Enjoy this bible passage below</h3>
        <marks-button 
                onClick={this.handleAction}
                text="Request new passage"
                appearance="primary" />
        <h4>{this.data && this.verseRef}</h4>
        <p><span innerHTML={this.verse} /></p>
        {/* <p>Verse: {this.verse && this.verse}</p>
        <p>Raw Text</p>
        <div>{this.data && JSON.stringify(this.data)}</div> */}
      </div>
    );
  }

}
