# marks-modal



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description | Type      | Default     |
| ------------ | ------------ | ----------- | --------- | ----------- |
| `appearance` | `appearance` |             | `string`  | `undefined` |
| `buttons`    | `buttons`    |             | `string`  | `undefined` |
| `closeIcon`  | `close-icon` |             | `string`  | `'x.svg'`   |
| `header`     | `header`     |             | `string`  | `undefined` |
| `isopen`     | `isopen`     |             | `boolean` | `undefined` |


## Events

| Event    | Description | Type               |
| -------- | ----------- | ------------------ |
| `action` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [marks-button](../marks-button)

### Graph
```mermaid
graph TD;
  marks-modal --> marks-button
  marks-button --> marks-spinner
  style marks-modal fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
