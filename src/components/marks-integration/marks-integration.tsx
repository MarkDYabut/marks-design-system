import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'marks-integration',
  styleUrl: 'marks-integration.css',
  shadow: true,
})
export class MarksIntegration {

  // http://localhost:8080/Rest/driver/new
  @State() isLoading: boolean = false;

  private newDriver(): any {
    const url = "http://localhost:8080/Rest";
    const uri = url + "/driver/new";
    this.isLoading = true;
    console.log('loading', this.isLoading)
    fetch(uri, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        res.json();
        console.log(res);
      })
      .catch(error => console.log('Error:', error))
      .then((data) => {
        console.log(data);
        console.log('loading', this.isLoading)
        this.isLoading = false;
        console.log('loading', this.isLoading)
      })
  }

  private handleAction = () => {
    this.newDriver();
  };

  render() {
    return (
      <Host>
        <h2>My first integration</h2>
        Loading? {this.isLoading ? "yes" : "no"}
        {this.isLoading ?
            <marks-button text="Requesting..." color="secondary" loader={true}></marks-button>
          :
          <marks-button
            onClick={this.handleAction}
            text="Request new driver"
            appearance=
            "primary" />
        }
        <slot></slot>
      </Host>
    );
  }

}
