/**
 * BSD 3-Clause License
 *
 * Copyright (c) 2021, Avonni Labs, Inc.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * - Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 *
 * - Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * - Neither the name of the copyright holder nor the names of its
 *   contributors may be used to endorse or promote products derived from
 *   this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

import { createElement } from 'lwc';
import Illustration from 'c/illustration';

describe('Illustration', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('Illustration Default attributes', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });

        expect(element.title).toBeUndefined();
        expect(element.variant).toBe('text-only');
        expect(element.size).toBe('small');
    });

    /* ----- ATTRIBUTES ----- */

    // title
    it('Illustration title', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        element.title = 'This is a title';

        return Promise.resolve().then(() => {
            const title = element.shadowRoot.querySelector('[data-element-id="h3"]');
            expect(title.textContent).toBe('This is a title');
        });
    });

    // size
    it('Illustration size small', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        return Promise.resolve().then(() => {
            const container = element.shadowRoot.querySelector(
                '.slds-illustration'
            );
            expect(container.className).toContain('slds-illustration_small');
            expect(container.className).not.toContain(
                'slds-illustration_large'
            );
        });
    });

    it('Illustration size large', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        element.size = 'large';

        return Promise.resolve().then(() => {
            const container = element.shadowRoot.querySelector(
                '.slds-illustration'
            );
            expect(container.className).not.toContain(
                'slds-illustration_small'
            );
            expect(container.className).toContain('slds-illustration_large');
        });
    });

    // variant
    it('Illustration variant text-only', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector('[data-element-id="img"]');
            expect(img).toBeFalsy();
        });
    });

    it('Illustration variant going-camping', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        element.variant = 'going-camping';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector('[data-element-id="img"]');
            expect(img.src).toContain(
                '/assets/canvas-elements/illustrationLibrary/going-camping.svg'
            );
        });
    });

    it('Illustration variant maintenance', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        element.variant = 'maintenance';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector('[data-element-id="img"]');
            expect(img.src).toContain(
                '/assets/canvas-elements/illustrationLibrary/maintenance.svg'
            );
        });
    });

    it('Illustration variant desert', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        element.variant = 'desert';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector('[data-element-id="img"]');
            expect(img.src).toContain(
                '/assets/canvas-elements/illustrationLibrary/desert.svg'
            );
        });
    });

    it('Illustration variant open-road', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        element.variant = 'open-road';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector('[data-element-id="img"]');
            expect(img.src).toContain(
                '/assets/canvas-elements/illustrationLibrary/open-road.svg'
            );
        });
    });

    it('Illustration variant no-access', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        element.variant = 'no-access';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector('[data-element-id="img"]');
            expect(img.src).toContain(
                '/assets/canvas-elements/illustrationLibrary/no-access.svg'
            );
        });
    });

    it('Illustration variant no-connection', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        element.variant = 'no-connection';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector('[data-element-id="img"]');
            expect(img.src).toContain(
                '/assets/canvas-elements/illustrationLibrary/no-connection.svg'
            );
        });
    });

    it('Illustration variant not-available-in-lightning', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        element.variant = 'not-available-in-lightning';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector('[data-element-id="img"]');
            expect(img.src).toContain(
                '/assets/canvas-elements/illustrationLibrary/not-available-in-lightning.svg'
            );
        });
    });

    it('Illustration variant page-not-available', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        element.variant = 'page-not-available';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector('[data-element-id="img"]');
            expect(img.src).toContain(
                '/assets/canvas-elements/illustrationLibrary/page-not-available.svg'
            );
        });
    });

    it('Illustration variant walkthrough-not-available', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        element.variant = 'walkthrough-not-available';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector('[data-element-id="img"]');
            expect(img.src).toContain(
                '/assets/canvas-elements/illustrationLibrary/walkthrough-not-available.svg'
            );
        });
    });

    it('Illustration variant fishing-deals', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        element.variant = 'fishing-deals';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector('[data-element-id="img"]');
            expect(img.src).toContain(
                '/assets/canvas-elements/illustrationLibrary/fishing-deals.svg'
            );
        });
    });

    it('Illustration variant lake-mountain', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        element.variant = 'lake-mountain';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector('[data-element-id="img"]');
            expect(img.src).toContain(
                '/assets/canvas-elements/illustrationLibrary/lake-mountain.svg'
            );
        });
    });

    it('Illustration variant no-events', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        element.variant = 'no-events';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector('[data-element-id="img"]');
            expect(img.src).toContain(
                '/assets/canvas-elements/illustrationLibrary/no-events.svg'
            );
        });
    });

    it('Illustration variant no-task', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        element.variant = 'no-task';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector('[data-element-id="img"]');
            expect(img.src).toContain(
                '/assets/canvas-elements/illustrationLibrary/no-task.svg'
            );
        });
    });

    it('Illustration variant setup', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        element.variant = 'setup';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector('[data-element-id="img"]');
            expect(img.src).toContain(
                '/assets/canvas-elements/illustrationLibrary/setup.svg'
            );
        });
    });

    it('Illustration variant gone-fishing', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        element.variant = 'gone-fishing';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector('[data-element-id="img"]');
            expect(img.src).toContain(
                '/assets/canvas-elements/illustrationLibrary/gone-fishing.svg'
            );
        });
    });

    it('Illustration variant no-access-2', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        element.variant = 'no-access-2';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector('[data-element-id="img"]');
            expect(img.src).toContain(
                '/assets/canvas-elements/illustrationLibrary/no-access-2.svg'
            );
        });
    });

    it('Illustration variant no-content', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        element.variant = 'no-content';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector('[data-element-id="img"]');
            expect(img.src).toContain(
                '/assets/canvas-elements/illustrationLibrary/no-content.svg'
            );
        });
    });

    it('Illustration variant no-preview', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        element.variant = 'no-preview';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector('[data-element-id="img"]');
            expect(img.src).toContain(
                '/assets/canvas-elements/illustrationLibrary/no-preview.svg'
            );
        });
    });

    it('Illustration variant preview', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        element.variant = 'preview';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector('[data-element-id="img"]');
            expect(img.src).toContain(
                '/assets/canvas-elements/illustrationLibrary/preview.svg'
            );
        });
    });

    it('Illustration variant research', () => {
        const element = createElement('base-illustration', {
            is: Illustration
        });
        document.body.appendChild(element);

        element.variant = 'research';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector('[data-element-id="img"]');
            expect(img.src).toContain(
                '/assets/canvas-elements/illustrationLibrary/research.svg'
            );
        });
    });
});
