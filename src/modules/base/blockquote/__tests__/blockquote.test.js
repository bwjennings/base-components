import { createElement } from 'lwc';
import Blockquote from 'c/blockquote';

let element;
describe('Blockquote', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    beforeEach(() => {
        element = createElement('base-blockquote', {
            is: Blockquote
        });
        document.body.appendChild(element);
    });

    it('Blockquote: Default attributes', () => {
        expect(element.variant).toBe('default');
        expect(element.title).toBeUndefined();
        expect(element.iconName).toBeUndefined();
        expect(element.iconPosition).toBe('left');
        expect(element.iconSize).toBe('small');
    });

    /* ----- ATTRIBUTES ----- */
    // variant
    it('Blockquote: variant default', () => {
        element.title = 'Blockquote Title';

        return Promise.resolve().then(() => {
            const div = element.shadowRoot.querySelector(
                '.avonni-blockquote__container'
            );
            expect(div.className).toContain('avonni-blockquote__theme-default');
        });
    });

    it('Blockquote: variant brand', () => {
        element.variant = 'brand';

        return Promise.resolve().then(() => {
            const div = element.shadowRoot.querySelector(
                '.avonni-blockquote__container'
            );
            expect(div.className).toContain('avonni-blockquote__theme-brand');
        });
    });

    it('Blockquote: variant warning', () => {
        element.variant = 'warning';

        return Promise.resolve().then(() => {
            const div = element.shadowRoot.querySelector(
                '.avonni-blockquote__container'
            );
            expect(div.className).toContain('avonni-blockquote__theme-warning');
        });
    });

    it('Blockquote: variant success', () => {
        element.variant = 'success';

        return Promise.resolve().then(() => {
            const div = element.shadowRoot.querySelector(
                '.avonni-blockquote__container'
            );
            expect(div.className).toContain('avonni-blockquote__theme-success');
        });
    });

    it('Blockquote: variant error', () => {
        element.variant = 'error';

        return Promise.resolve().then(() => {
            const div = element.shadowRoot.querySelector(
                '.avonni-blockquote__container'
            );
            expect(div.className).toContain('avonni-blockquote__theme-error');
        });
    });

    // title
    it('Blockquote: title', () => {
        element.title = 'Blockquote Title';

        return Promise.resolve().then(() => {
            const div = element.shadowRoot.querySelector(
                '.avonni-blockquote__container.avonni-blockquote__title'
            );
            expect(div.textContent).toBe('Blockquote Title');
        });
    });

    // icon name
    it('Blockquote: icon name', () => {
        element.iconName = 'utility:error';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id^="lightning-icon"]'
            );
            expect(icon.iconName).toBe('utility:error');
        });
    });

    // icon size
    it('Blockquote: icon size xx-small', () => {
        element.iconName = 'utility:error';
        element.iconSize = 'xx-small';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id^="lightning-icon"]'
            );
            expect(icon.size).toBe('xx-small');
        });
    });

    it('Blockquote: icon size x-small', () => {
        element.iconName = 'utility:error';
        element.iconSize = 'x-small';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id^="lightning-icon"]'
            );
            expect(icon.size).toBe('x-small');
        });
    });

    it('Blockquote: icon size small', () => {
        element.iconName = 'utility:error';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id^="lightning-icon"]'
            );
            expect(icon.size).toBe('small');
        });
    });

    it('Blockquote: icon size medium', () => {
        element.iconName = 'utility:error';
        element.iconSize = 'medium';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id^="lightning-icon"]'
            );
            expect(icon.size).toBe('medium');
        });
    });

    it('Blockquote: icon size large', () => {
        element.iconName = 'utility:error';
        element.iconSize = 'large';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id^="lightning-icon"]'
            );
            expect(icon.size).toBe('large');
        });
    });

    // icon position
    it('Blockquote: icon position right', () => {
        element.iconName = 'utility:error';
        element.iconPosition = 'right';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id^="lightning-icon"]'
            );
            expect(icon.className).toContain('slds-m-left_x-small');
        });
    });

    it('Blockquote: icon position left', () => {
        element.iconName = 'utility:error';
        element.iconPosition = 'left';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id^="lightning-icon"]'
            );
            expect(icon.className).toContain('slds-m-right_x-small');
        });
    });
});
