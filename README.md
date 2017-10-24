[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/alfonsorios96/paper-dynamic-forms)
[![Build Status](https://travis-ci.org/alfonsorios96/paper-dynamic-forms.svg?branch=0.2.5)](https://travis-ci.org/alfonsorios96/paper-dynamic-forms)

# Paper Dynamic Forms

This web component gives to the frontend developer a tool to create polls, quiz and other kinds of forms dynamically.

## Installation

`bower install --save alfonsorios96/paper-dynamic-forms`

## Usage

```html
<paper-dynamic-forms config="[[config]]"></paper-dynamic-forms>
```

The diffents types are: "text-input", "option-input", "checkbox-input" and "radio-button-input"

The attribute 'config' is an array that defines the fields to make.

Of course, in change of a js array config, you can use a Polymer array inside your own web component.

Other idea is use iron-ajax and a JSON file for declare your forms definitions and get it in a object, then use it with this component.

```js
let config = [{
    label: 'Some label',
    type: 'type-input',
    options: ['option a', 'option b', 'option c']
}];
```

Inside of config (or whatever you want named) has three properties.
The first one defines the placeholder or label to display to the user, the second defines the type of your form field
and the third (options)
is a string array with the options for the fields need it. E.g. checkbox-input or option-input.

### Styling

`<paper-dynamic-forms>` provides the following custom properties and mixins
for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-dynamic-forms-mixin` | Mixin with position of items | `Display: flex, Flex-direction: row`
`--paper-dynamic-forms-bg-color` | Variable applied to the background-color of container | `transparent`
`--paper-dynamic-forms-color` | Variable applied to the background-color of container | `transparent`

## Properties

config: Array.  Defines the array of definition for your form elements.

## Events

option-input-response   Returns an object detail {model: 'this is the model defines in your json array', option: 'The value selected'}
text-input-response   Returns an object detail {model: 'this is the model defines in your json array', option: 'The value in the field'}

The goal is use the detail.model.item.label and detail.option to use logic!

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Install dependencies npm: `npm install`
4. Install dependencies bower: `bower install`
5. Test before anything hehe this is TDD: `npm run test`
6. Commit your changes: `git commit -am 'Add some feature'`
7. Push to the branch: `git push origin my-new-feature`
8. Submit a pull request :D

## History

We (Aldo and me) were borried, so we decided contribute to Polymer community with an awesome element. Enjoy it!

## Credits

Aldo Aldaco and Alfonso Ríos
@aldoaldaco
@alfonsorios96

## License

MIT License
