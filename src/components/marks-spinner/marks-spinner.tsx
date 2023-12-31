import { Component, Prop, getAssetPath, h } from '@stencil/core';


@Component({
  tag: 'marks-spinner',
  styleUrl: 'marks-spinner.scss',
  assetsDirs: ['assets'],
})
export class MarksSpinner {

  @Prop() type: any = 'android';
  @Prop() color: any = 'grey';

  render() {
    switch (this.type) {
      case 'circle':
        return (
         <img src={getAssetPath("./assets/12-dots-scale-rotate.svg")} alt="circle icon"/>
        );
      case 'bars':
        return (
          <img src={getAssetPath("./assets/tadpole.svg")} alt="bars icon"/>
          );
      case 'android':
        return (
          <img src={getAssetPath("./assets/wifi.svg")} alt="bars icon"/>
        );
      case 'ios':
        return (
          <img src={getAssetPath("./assets/wind-toy.svg")} alt="bars icon"/>
        );
      default:
        return (null);
    }

  }
}