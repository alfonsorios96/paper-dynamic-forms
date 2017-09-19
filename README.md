[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/alfonsorios96/paper-dynamic-forms)

# Paper Dynamic Forms

This web component gives to the frontend developer a tool to create polls, quiz and other kinds of forms dynamically.

## Installation

<snippet>bower install --save alfonsorios96/paper-dynamic-forms</snippet>

## Usage

```html
<paper-dynamic-forms type="text-input" sentences="[[config]]"></paper-dynamic-forms>
```

The diffents types are: "text-input", "option-input", "checkbox-input" and "radio-button-input"

The attribute 'sentences' is an array that defines the fields to make.

Of course, in change of a js array config, you can use a Polymer array inside your own web component.

Other idea is use iron-ajax and a JSON file for declare your forms definitions and get it in a object, then use it with this component.

```js
let config = [{
    label: 'Some label',
    options: ['option a', 'option b', 'option c']
}];
```

Inside of config (or whatever you want named) has two properties.
The first one defines the placeholder or label to display to the user and the other one (options)
is a string array with the options for the fields need it. E.g. checkbox-input or option-input.


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

We (Aldo and me) were borried, so we decided contribute to Polymer community with an awesome element. Enjoy it!

## Credits

Aldo Aldaco and Alfonso Ríos
@aldoaldaco
@alfonsorios96

## License

MIT License