import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'marks-integration',
  styleUrl: 'marks-integration.css',
  shadow: true,
})
export class MarksIntegration {

  // http://localhost:8080/Rest/driver/new
  @State() isLoading: boolean = false;
  @State() data: any;
  @State() drivers: string[] = [];

  async fetchData(endpoint: string) {
    const url = "http://localhost:8080/Rest";
    const uri = url + endpoint;
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

  private handleNewDriver = () => {
    this.fetchData("/driver/new");
    this.drivers = this.data.allDrivers;
  };

  private handleGetDrivers = () => {
    this.fetchData("/driver/viewDrivers");
    this.drivers = this.data.allDrivers;
  };

  private handleDeleteDrivers = () => {
    this.fetchData("/driver/destroyAll");
    this.drivers = this.data.allDrivers;
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
            onClick={this.handleNewDriver}
            text="Request new driver"
            appearance=
            "primary" />
        }
        {this.data ? <p>Created: {this.data.createdDriver}</p> : <p>Request new driver now!</p>}
        Loading? {this.isLoading ? "yes" : "no"}
        {this.isLoading ?
          <marks-button text="Requesting..." color="secondary" loader={true}></marks-button>
          :
          <marks-button
            onClick={this.handleGetDrivers}
            text="Request all drivers"
            appearance=
            "warning" />
        }
        <p>All Drivers:</p>
        <ol>
          {this.drivers.map((driver) => <li>{driver}</li>)}
        </ol>
        Loading? {this.isLoading ? "yes" : "no"}
        {this.isLoading ?
          <marks-button text="Requesting..." color="secondary" loader={true}></marks-button>
          :
          <marks-button
            onClick={this.handleDeleteDrivers}
            text="Delete all drivers"
            appearance=
            "danger" />
        }
        <slot></slot>
      </Host>
    );
  }

}
