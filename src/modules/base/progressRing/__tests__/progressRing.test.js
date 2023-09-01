

import { createElement } from 'lwc';
import ProgressRing from 'c/progressRing';

let element;
describe('ProgressRing', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    beforeEach(() => {
        element = createElement('base-progress-ring', {
            is: ProgressRing
        });
        document.body.appendChild(element);
    });

    it('Progress ring: Default attributes', () => {
        expect(element.direction).toBe('fill');
        expect(element.hideIcon).toBeFalsy();
        expect(element.size).toBe('medium');
        expect(element.value).toBe(0);
        expect(element.variant).toBe('base');
    });

    /* ----- ATTRIBUTES ----- */

    // direction and value
    it('Progress ring: direction = fill, value = 34', () => {
        element.direction = 'fill';
        element.value = 34;

        return Promise.resolve().then(() => {
            const path = element.shadowRoot.querySelector(
                '[data-element-id="path"]'
            );
            const arcx = Math.cos(2 * Math.PI * 0.34);
            const arcy = Math.sin(2 * Math.PI * 0.34) * -1;

            expect(path.getAttribute('d')).toBe(
                `M 1 0 A 1 1 0 0 0 ${arcx} ${arcy} L 0 0`
            );
        });
    });

    it('Progress ring: value > 100', () => {
        element.value = 110;

        return Promise.resolve().then(() => {
            expect(element.value).toBe(100);
        });
    });

    it('Progress ring: value < 0', () => {
        element.value = -110;

        return Promise.resolve().then(() => {
            expect(element.value).toBe(0);
        });
    });

    it('Progress ring: value NaN', () => {
        element.value = 'a';

        return Promise.resolve().then(() => {
            expect(element.value).toBe(0);
        });
    });

    it('Progress ring: direction = drain, value = 87', () => {
        element.direction = 'drain';
        element.value = 87;

        return Promise.resolve().then(() => {
            const path = element.shadowRoot.querySelector(
                '[data-element-id="path"]'
            );
            const arcx = Math.cos(2 * Math.PI * 0.87);
            const arcy = Math.sin(2 * Math.PI * 0.87);

            expect(path.getAttribute('d')).toBe(
                `M 1 0 A 1 1 0 1 1 ${arcx} ${arcy} L 0 0`
            );
        });
    });

    // hide-icon
    // Depends on variant
    it('Progress ring: hideIcon = false', () => {
        element.hideIcon = false;
        element.variant = 'warning';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="lightning-icon"]'
            );

            expect(icon).toBeTruthy();
        });
    });

    it('Progress ring: hideIcon = true', () => {
        element.hideIcon = true;
        element.variant = 'warning';

        return Promise.resolve().then(() => {
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="lightning-icon"]'
            );

            expect(icon).toBeFalsy();
        });
    });

    // size
    it('Progress ring: size = medium', () => {
        element.size = 'medium';

        return Promise.resolve().then(() => {
            const wrapper = element.shadowRoot.querySelector(
                '.slds-progress-ring'
            );

            expect(wrapper.classList).not.toContain('slds-progress-ring_large');
        });
    });

    it('Progress ring: size = large', () => {
        element.size = 'large';

        return Promise.resolve().then(() => {
            const wrapper = element.shadowRoot.querySelector(
                '.slds-progress-ring'
            );

            expect(wrapper.classList).toContain('slds-progress-ring_large');
        });
    });

    // variant
    // Depends on value
    it('Progress ring: variant = base', () => {
        element.variant = 'base';

        return Promise.resolve().then(() => {
            const wrapper = element.shadowRoot.querySelector(
                '.slds-progress-ring'
            );
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="lightning-icon"]'
            );

            expect(wrapper.classList).not.toContain(
                'slds-progress-ring_warning'
            );
            expect(wrapper.classList).not.toContain(
                'slds-progress-ring_expired'
            );
            expect(wrapper.classList).not.toContain(
                'slds-progress-ring_active-step'
            );
            expect(wrapper.classList).not.toContain(
                'slds-progress-ring_complete'
            );
            expect(icon).toBeFalsy();
        });
    });

    it('Progress ring: variant = active-step', () => {
        element.variant = 'active-step';

        return Promise.resolve().then(() => {
            const wrapper = element.shadowRoot.querySelector(
                '.slds-progress-ring'
            );
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="lightning-icon"]'
            );

            expect(wrapper.classList).not.toContain(
                'slds-progress-ring_warning'
            );
            expect(wrapper.classList).not.toContain(
                'slds-progress-ring_expired'
            );
            expect(wrapper.classList).toContain(
                'slds-progress-ring_active-step'
            );
            expect(wrapper.classList).not.toContain(
                'slds-progress-ring_complete'
            );
            expect(icon).toBeFalsy();
        });
    });

    it('Progress ring: variant = warning', () => {
        element.variant = 'warning';

        return Promise.resolve().then(() => {
            const wrapper = element.shadowRoot.querySelector(
                '.slds-progress-ring'
            );
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="lightning-icon"]'
            );

            expect(wrapper.classList).toContain('slds-progress-ring_warning');
            expect(wrapper.classList).not.toContain(
                'slds-progress-ring_expired'
            );
            expect(wrapper.classList).not.toContain(
                'slds-progress-ring_active-step'
            );
            expect(wrapper.classList).not.toContain(
                'slds-progress-ring_complete'
            );
            expect(icon).toBeTruthy();
            expect(icon.classList).toContain('slds-icon-utility-warning');
            expect(icon.classList).not.toContain('slds-icon-utility-error');
            expect(icon.classList).not.toContain('slds-icon-utility-check');
            expect(icon.alternativeText).toBe('Warning');
            expect(icon.iconName).toBe('utility:warning');
        });
    });

    it('Progress ring: variant = expired', () => {
        element.variant = 'expired';

        return Promise.resolve().then(() => {
            const wrapper = element.shadowRoot.querySelector(
                '.slds-progress-ring'
            );
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="lightning-icon"]'
            );

            expect(wrapper.classList).not.toContain(
                'slds-progress-ring_warning'
            );
            expect(wrapper.classList).toContain('slds-progress-ring_expired');
            expect(wrapper.classList).not.toContain(
                'slds-progress-ring_active-step'
            );
            expect(wrapper.classList).not.toContain(
                'slds-progress-ring_complete'
            );
            expect(icon).toBeTruthy();
            expect(icon.classList).not.toContain('slds-icon-utility-warning');
            expect(icon.classList).toContain('slds-icon-utility-error');
            expect(icon.classList).not.toContain('slds-icon-utility-check');
            expect(icon.alternativeText).toBe('Expired');
            expect(icon.iconName).toBe('utility:error');
        });
    });

    it('Progress ring: variant = base-autocomplete', () => {
        element.variant = 'base-autocomplete';

        return Promise.resolve().then(() => {
            const wrapper = element.shadowRoot.querySelector(
                '.slds-progress-ring'
            );
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="lightning-icon"]'
            );

            expect(wrapper.classList).not.toContain(
                'slds-progress-ring_warning'
            );
            expect(wrapper.classList).not.toContain(
                'slds-progress-ring_expired'
            );
            expect(wrapper.classList).not.toContain(
                'slds-progress-ring_active-step'
            );
            expect(wrapper.classList).not.toContain(
                'slds-progress-ring_complete'
            );
            expect(icon).toBeFalsy();
        });
    });

    it('Progress ring: variant = base-autocomplete, with value = 100', () => {
        element.variant = 'base-autocomplete';
        element.value = 100;

        return Promise.resolve().then(() => {
            const wrapper = element.shadowRoot.querySelector(
                '.slds-progress-ring'
            );
            const icon = element.shadowRoot.querySelector(
                '[data-element-id="lightning-icon"]'
            );

            expect(wrapper.classList).not.toContain(
                'slds-progress-ring_warning'
            );
            expect(wrapper.classList).not.toContain(
                'slds-progress-ring_expired'
            );
            expect(wrapper.classList).not.toContain(
                'slds-progress-ring_active-step'
            );
            expect(wrapper.classList).toContain('slds-progress-ring_complete');
            expect(icon).toBeTruthy();
            expect(icon.classList).not.toContain('slds-icon-utility-warning');
            expect(icon.classList).not.toContain('slds-icon-utility-error');
            expect(icon.classList).toContain('slds-icon-utility-check');
            expect(icon.alternativeText).toBe('Complete');
            expect(icon.iconName).toBe('utility:check');
        });
    });
});
