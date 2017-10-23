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
                config: {
                    type: Array
                }
            };
        }

        isTextForm(item) {
            if (item.type === 'text-input') {
                return true;
            } else {
                return false;
            }
        }

        isOptionForm(item) {
            if (item.type === 'option-input') {
                return true;
            } else {
                return false;
            }
        }

        isCheckboxForm(item) {
            if (item.type === 'checkbox-input') {
                return true;
            } else {
                return false;
            }
        }

        isRadioButtonForm(item) {
            if (item.type === 'radio-button-input') {
                return true;
            } else {
                return false;
            }
        }

        optionSelectedHandler(event) {
            let payload = {
                model: event.model,
                option: event.detail.value
            };
            this.dispatchEvent(new CustomEvent('option-input-response', {
                bubbles: true,
                composed: true,
                detail: payload
            }));
        }

        textHandler(event) {
            let payload = {
                model: event.model,
                option: event.detail.value
            };
            this.dispatchEvent(new CustomEvent('text-input-response', {
                bubbles: true,
                composed: true,
                detail: payload
            }));
        }
    }

    customElements.define(PaperDynamicForms.is, PaperDynamicForms);
})(window.customElements);