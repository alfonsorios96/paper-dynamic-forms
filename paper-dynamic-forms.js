(function PaperDynamicFormsDefinition(customElements) {
    'use strict';

    /**
     * `paper-dynamic-forms`
     * This component gives a easy and comfortable way to magives a easy and comfortable way to make dynamics prohectske dynamics projects. E.g. polls
     *
     * @customElement
     * @polymer
     * @demo demo/index.html
     */

    /**
     * Fired when `input.value` changes.
     *
     * @event text-input-response
     * @return {model: {iterator item}, option: 'value: string'} newAwesome New level of awesomeness.
     */

    /**
     * Fired when `select.value` changes.
     *
     * @event option-input-response
     * @return {model: {iterator item}, option: 'value: string'} newAwesome New level of awesomeness.
     */
    class PaperDynamicForms extends Polymer.Element {
        static get is() {
            return 'paper-dynamic-forms';
        }

        static get properties() {
            return {
                /*
                * @property config. Defines the form elements will be composed the component
                The structure for each object are these:
                {
                    label: 'Some label',
                    type: 'type-input',
                    options: ['option a', 'option b', 'option c']
                }
                The property options is optional,
                The label is the title/placeholder of field title.
                The type allows choose different forms: inputs, select..., the valid keys are: 'type-input' ......
                */
                config: {
                    type: Array,
                    value: []
                }
            };
        }

        isTextForm(formItem) {
            return formItem.type === 'text-input';
        }

        isOptionForm(formItem) {
            return formItem.type === 'option-input';
        }

        isCheckboxForm(formItem) {
            return formItem.type === 'checkbox-input';
        }

        isRadioButtonForm(formItem) {
            return formItem.type === 'radio-button-input';
        }

        optionSelectedHandler(event) {
            this.eventHandler(event.model, event.detail.value, 'option-input-response');
        }

        textHandler(event) {
            this.eventHandler(event.model, event.detail.value, 'text-input-response');
        }

        eventHandler(model, value, eventName) {
            let payload = {
                model: model,
                option: value
            };
            this.dispatchEvent(new CustomEvent(eventName, {
                bubbles: true,
                composed: true,
                detail: payload
            }));
        }
    }

    customElements.define(PaperDynamicForms.is, PaperDynamicForms);
})(window.customElements);