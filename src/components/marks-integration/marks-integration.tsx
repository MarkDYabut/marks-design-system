import { Component, Host, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'marks-integration',
  styleUrl: 'marks-integration.css',
  shadow: true,
})
export class MarksIntegration {

  // http://localhost:8080/Rest/driver/new
  @State() isLoading: boolean = false;
  @State() data: any;

  async fetchData() {
    const url = "http://localhost:8080/Rest";
    const uri = url + "/driver/new";
    this.isLoading = true;
    console.log('loading', this.isLoading)
    fetch(uri, {
      method: 'GET',
      // mode: 'no-cors', this breaks responses, handle cors on server side
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        this.data = data;
        console.log(data);
      })
      .catch(error => console.log('Error:', error))
      .finally(() => {
        this.isLoading = false;
        console.log('loading', this.isLoading)
      })
  }

  private handleAction = () => {
    this.fetchData();
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
        {this.data ? <p>Created: {this.data.createdDriver}</p> : <p>Request new driver now!</p>}
        <slot></slot>
      </Host>
    );
  }

}
