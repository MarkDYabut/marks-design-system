# marks-button



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description | Type      | Default     |
| ------------ | ------------ | ----------- | --------- | ----------- |
| `appearance` | `appearance` |             | `string`  | `undefined` |
| `loader`     | `loader`     |             | `boolean` | `undefined` |
| `text`       | `text`       |             | `string`  | `undefined` |


## Dependencies

### Used by

 - [marks-integration](../marks-integration)
 - [marks-modal](../marks-modal)
 - [my-component](../my-component)

### Depends on

- [marks-spinner](../marks-spinner)

### Graph
```mermaid
graph TD;
  marks-button --> marks-spinner
  marks-integration --> marks-button
  marks-modal --> marks-button
  my-component --> marks-button
  style marks-button fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
