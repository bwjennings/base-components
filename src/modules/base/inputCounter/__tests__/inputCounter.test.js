import { createElement } from 'lwc';
import InputCounter from 'c/inputCounter';

// Not tested because cannot test lightning-input:
// messageWhenBadInput
// messageWhenPatternMismatch
// messageWhenRangeOverflow
// messageWhenRangeUnderflow
// messageWhenStepMismatch
// messageWhenValueMissing
// focus method
// blur method

describe('Input Counter', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('Input Counter Default attributes', () => {
        const element = createElement('base-input-counter', {
            is: InputCounter
        });

        expect(element.name).toBeUndefined();
        expect(element.label).toBeUndefined();
        expect(element.messageWhenBadInput).toBeUndefined();
        expect(element.messageWhenPatternMismatch).toBeUndefined();
        expect(element.messageWhenRangeOverflow).toBeUndefined();
        expect(element.messageWhenRangeUnderflow).toBeUndefined();
        expect(element.messageWhenStepMismatch).toBeUndefined();
        expect(element.messageWhenValueMissing).toBeUndefined();
        expect(element.ariaLabel).toBeUndefined();
        expect(element.ariaControls).toBeUndefined();
        expect(element.ariaLabelledBy).toBeUndefined();
        expect(element.ariaDescribedBy).toBeUndefined();
        expect(element.max).toBeUndefined();
        expect(element.min).toBeUndefined();
        expect(element.step).toBe(1);
        expect(element.value).toBeUndefined();
        expect(element.variant).toBe('standard');
        expect(element.disabled).toBeFalsy();
        expect(element.readOnly).toBeFalsy();
        expect(element.required).toBeFalsy();
        expect(element.fieldLevelHelp).toBeUndefined();
        expect(element.accessKey).toBeUndefined();
    });

    /* ----- ATTRIBUTES ----- */

    // name
    it('Input Counter name', () => {
        const element = createElement('base-input-counter', {
            is: InputCounter
        });
        document.body.appendChild(element);

        element.name = 'This is a name text';

        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector('lightning-input');
            expect(input.name).toBe('This is a name text');
        });
    });

    // label
    it('Input Counter label', () => {
        const element = createElement('base-input-counter', {
            is: InputCounter
        });
        document.body.appendChild(element);

        element.label = 'This is a label text';

        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector('lightning-input');
            expect(input.label).toBe('This is a label text');
        });
    });

    it('Input Counter label label-inline', () => {
        const element = createElement('base-input-counter', {
            is: InputCounter
        });
        document.body.appendChild(element);

        element.label = 'This is a label text';
        element.variant = 'label-inline';

        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector('lightning-input');
            expect(input.label).toBe('This is a label text');
            const label = element.shadowRoot.querySelector(
                '.slds-form-element__label'
            );
            expect(label.textContent).toBe('This is a label text');
        });
    });

    // aria-label
    it('Input Counter aria-label', () => {
        const element = createElement('base-input-counter', {
            is: InputCounter
        });
        document.body.appendChild(element);

        element.ariaLabel = 'Aria-label';

        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector('lightning-input');
            expect(input.ariaLabel).toBe('Aria-label');
        });
    });

    // aria-controls
    it('Input Counter aria-controls', () => {
        const element = createElement('base-input-counter', {
            is: InputCounter
        });
        document.body.appendChild(element);

        element.ariaControls = 'I';

        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector('lightning-input');
            expect(input.ariaControls).toBe('I-17');
        });
    });

    // aria-labelled-by
    it('Input Counter aria-labelled-by', () => {
        const element = createElement('base-input-counter', {
            is: InputCounter
        });
        document.body.appendChild(element);

        element.ariaLabelledBy = 'I';

        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector('lightning-input');
            expect(input.ariaLabelledBy).toBe('I-21');
        });
    });

    // aria-described-by
    it('Input Counter aria-described-by', () => {
        const element = createElement('base-input-counter', {
            is: InputCounter
        });
        document.body.appendChild(element);

        element.ariaDescribedBy = 'I';

        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector('lightning-input');
            expect(input.ariaDescribedBy).toBe('I-25');
        });
    });

    // max
    it('Input Counter max', () => {
        const element = createElement('base-input-counter', {
            is: InputCounter
        });
        document.body.appendChild(element);

        element.max = 5;

        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector('lightning-input');
            expect(input.max).toBe(5);
        });
    });

    // min
    it('Input Counter min', () => {
        const element = createElement('base-input-counter', {
            is: InputCounter
        });
        document.body.appendChild(element);

        element.min = 5;

        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector('lightning-input');
            expect(input.min).toBe(5);
        });
    });

    // step
    it('Input Counter step', () => {
        const element = createElement('base-input-counter', {
            is: InputCounter
        });
        document.body.appendChild(element);

        element.step = 5;
        element.value = 0;
        const input = element.shadowRoot.querySelector('lightning-input');

        return Promise.resolve()
            .then(() => {
                expect(input.step).toBe(5);
                expect(element.value).toBe(0);
            })
            .then(() => {
                const addButton = element.shadowRoot.querySelector(
                    "lightning-button-icon[title='Increment counter']"
                );
                addButton.click();
                expect(element.value).toBe(5);
            });
    });

    // value
    it('Input Counter value', () => {
        const element = createElement('base-input-counter', {
            is: InputCounter
        });
        document.body.appendChild(element);

        element.value = 5;

        return Promise.resolve()
            .then(() => {
                const input = element.shadowRoot.querySelector(
                    'lightning-input'
                );
                expect(input.value).toBe(5);
            })
            .then(() => {
                const minus = element.shadowRoot.querySelector(
                    "lightning-button-icon[title='Decrement counter']"
                );
                minus.click();
                expect(element.value).toBe(4);
            });
    });

    // disabled
    it('Input Counter disabled', () => {
        const element = createElement('base-input-counter', {
            is: InputCounter
        });
        document.body.appendChild(element);

        element.disabled = true;

        return Promise.resolve().then(() => {
            const input = element.shadowRoot.querySelector('lightning-input');
            expect(input.disabled).toBeTruthy();
        });
    });

    // read only
    it('Input Counter read only', () => {
        const element = createElement('base-input-counter', {
            is: InputCounter
        });
        document.body.appendChild(element);

        element.readOnly = true;

        return Promise.resolve().then(() => {
            const buttonIcon = element.shadowRoot.querySelectorAll(
                'lightning-button-icon'
            );
            expect(buttonIcon).toHaveLength(0);
            const input = element.shadowRoot.querySelector('lightning-input');
            expect(input.className).toBe('');
        });
    });

    // required needs to be label inline
    it('Input Counter required', () => {
        const element = createElement('base-input-counter', {
            is: InputCounter
        });
        document.body.appendChild(element);

        element.required = true;
        element.variant = 'label-inline';

        return Promise.resolve().then(() => {
            const required = element.shadowRoot.querySelector('abbr');
            expect(required).toBeTruthy();
            expect(required.textContent).toBe('*');
        });
    });

    // field level help
    it('Input Counter field level help', () => {
        const element = createElement('base-input-counter', {
            is: InputCounter
        });
        document.body.appendChild(element);

        element.fieldLevelHelp = 'This is a field level help';
        element.variant = 'label-inline';

        return Promise.resolve().then(() => {
            const helpText = element.shadowRoot.querySelector(
                'lightning-helptext'
            );
            expect(helpText).toBeTruthy();
            expect(helpText.content).toBe('This is a field level help');
        });
    });

    it('Input Counter field level help label hidden', () => {
        const element = createElement('base-input-counter', {
            is: InputCounter
        });
        document.body.appendChild(element);

        element.fieldLevelHelp = 'This is a field level help';
        element.variant = 'label-hidden';

        return Promise.resolve().then(() => {
            const helpText = element.shadowRoot.querySelector(
                'lightning-helptext'
            );
            expect(helpText).toBeNull();
        });
    });

    /* ----- EVENTS ----- */

    // Input counter change
    it('Input counter change event', () => {
        const element = createElement('base-input-counter', {
            is: InputCounter
        });
        document.body.appendChild(element);

        const handler = jest.fn();
        element.addEventListener('change', handler);

        return Promise.resolve().then(() => {
            const button = element.shadowRoot.querySelector(
                'lightning-button-icon'
            );
            button.click();
            expect(handler).toHaveBeenCalled();
            expect(handler.mock.calls[0][0].detail.value).toBe(-1);
            expect(handler.mock.calls[0][0].bubbles).toBeFalsy();
            expect(handler.mock.calls[0][0].composed).toBeFalsy();
            expect(handler.mock.calls[0][0].cancelable).toBeFalsy();
        });
    });
});
