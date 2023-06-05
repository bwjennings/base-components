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
import Image from 'c/image';

// not tested
// cannot test computed images based on layout ( e.g. static Images and certain image states that do not have assigned dimensions ). Jest does not provide a layout system.
// cannot test aspect-ratio//most crop-size output. Jest/JS-Dom does not recognize its attribute within dom element. The JS function goes through, however since aspect-ratio computes only with 1 dimension ( e.g. width or height ) - we can only test the input dimension to match the same output dimension which is pointless.

const src =
    'https://react.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg';

let element;
describe('Image', () => {
    afterEach(() => {
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    beforeEach(() => {
        element = createElement('base-image', {
            is: Image
        });
        document.body.appendChild(element);
    });

    it('Image: Default attributes', () => {
        expect(element.alternativeText).toBeUndefined();
        expect(element.cropFit).toBe('cover');
        expect(element.cropPositionX).toBe('50');
        expect(element.cropPositionY).toBe('50');
        expect(element.cropSize).toBeUndefined();
        expect(element.fluid).toBeFalsy();
        expect(element.fluidGrow).toBeFalsy();
        expect(element.height).toBeUndefined();
        expect(element.lazyLoading).toBe('auto');
        expect(element.sizes).toBeUndefined();
        expect(element.position).toBeUndefined();
        expect(element.src).toBeUndefined();
        expect(element.srcset).toBeUndefined();
        expect(element.staticImages).toBeFalsy();
        expect(element.thumbnail).toBeFalsy();
        expect(element.width).toBeUndefined();
        expect(element.magnifierType).toBeUndefined();
        expect(element.magnifierAttributes.position).toBe('auto');
        expect(element.magnifierAttributes.horizontalOffset).toBe(0);
        expect(element.magnifierAttributes.verticalOffset).toBe(0);
        expect(element.magnifierAttributes.smoothMove).toBeFalsy();
        expect(element.magnifierAttributes.zoomFactor).toBe(2);
        expect(element.magnifierAttributes.zoomRatioWidth).toBe('100px');
        expect(element.magnifierAttributes.zoomRatioHeight).toBe('100px');
    });

    /* ----- ATTRIBUTES ----- */

    // alt
    it('Image: alternative text', () => {
        element.src = src;
        element.alternativeText = 'This is an Alternative text';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector(
                '[data-element-id="img"]'
            );
            expect(img.alt).toBe('This is an Alternative text');
        });
    });

    describe('Image: Cropping', () => {
        it('Image: Crop Fit Cover', () => {
            element.src = src;
            element.cropSize = '16x9';
            element.cropFit = 'cover';

            return Promise.resolve().then(() => {
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                expect(img.style.objectFit).toBe('cover');
            });
        });

        it('Image: Crop Fit Contain', () => {
            element.src = src;
            element.cropSize = '16x9';
            element.cropFit = 'contain';

            return Promise.resolve().then(() => {
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                expect(img.style.objectFit).toBe('contain');
            });
        });

        it('Image: Crop Fit Fill', () => {
            element.src = src;
            element.cropSize = '16x9';
            element.cropFit = 'fill';

            return Promise.resolve().then(() => {
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                expect(img.style.objectFit).toBe('fill');
            });
        });

        it('Image: Crop Fit None', () => {
            element.src = src;
            element.cropSize = '16x9';
            element.cropFit = 'none';

            return Promise.resolve().then(() => {
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                expect(img.style.objectFit).toBe('none');
            });
        });

        // Crop Position
        it('Image: Crop Position', () => {
            element.src = src;
            element.cropSize = '16x9';
            element.cropFit = 'none';
            element.cropPositionX = '25';
            element.cropPositionY = '75';

            return Promise.resolve().then(() => {
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                expect(img.style.objectPosition).toBe('25% 75%');
            });
        });

        // Cropped Img Alignment - left, right, centre
        it('Image: Cropped Image Left', () => {
            element.src = src;
            element.cropSize = '16x9';
            element.width = '300';
            element.position = 'left';

            return Promise.resolve().then(() => {
                const container = element.shadowRoot.querySelector(
                    '[data-element-id="container"]'
                );
                expect(container.classList).toContain('slds-float_left');
            });
        });

        it('Image: Cropped Image Center', () => {
            element.src = src;
            element.cropSize = '16x9';
            element.width = '300';
            element.position = 'center';

            return Promise.resolve().then(() => {
                const container = element.shadowRoot.querySelector(
                    '[data-element-id="container"]'
                );
                expect(container.classList).toContain(
                    'slds-align_absolute-center',
                    'slds-show'
                );
            });
        });

        it('Image: Cropped Image - Right', () => {
            element.src = src;
            element.cropSize = '16x9';
            element.width = '300';
            element.position = 'right';

            return Promise.resolve().then(() => {
                const container = element.shadowRoot.querySelector(
                    '[data-element-id="container"]'
                );
                expect(container.classList).toContain('slds-float_right');
            });
        });

        // img NO Crop - Height Only
        it('Image: No crop - Height Only', () => {
            element.src = src;
            element.height = '225';

            return Promise.resolve().then(() => {
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                expect(img.style.height).toBe('225px');
            });
        });
    });

    // fluid
    it('Image: Fluid', () => {
        element.src = src;
        element.fluid = true;

        return Promise.resolve().then(() => {
            const container = element.shadowRoot.querySelector(
                '[data-element-id="container"]'
            );
            expect(container.classList).toContain('avonni-image_fluid');
        });
    });

    // fluid grow
    it('Image: Fluid grow', () => {
        element.src = src;
        element.fluidGrow = true;

        return Promise.resolve().then(() => {
            const container = element.shadowRoot.querySelector(
                '[data-element-id="container"]'
            );
            expect(container.classList).toContain(
                'avonni-image_fluid',
                'avonni-image_fluid-grow'
            );
        });
    });

    describe('Image: Position', () => {
        it('Image: Position left', () => {
            element.src = src;
            element.position = 'left';

            return Promise.resolve().then(() => {
                const container = element.shadowRoot.querySelector(
                    '[data-element-id="container"]'
                );
                expect(container.classList).toContain('slds-float_left');
            });
        });

        it('Image: Position right', () => {
            element.src = src;
            element.position = 'right';

            return Promise.resolve().then(() => {
                const container = element.shadowRoot.querySelector(
                    '[data-element-id="container"]'
                );
                expect(container.classList).toContain('slds-float_right');
            });
        });

        it('Image: Position center', () => {
            element.src = src;
            element.position = 'center';

            return Promise.resolve().then(() => {
                const container = element.shadowRoot.querySelector(
                    '[data-element-id="container"]'
                );
                expect(container.classList).toContain(
                    'slds-align_absolute-center',
                    'slds-show'
                );
            });
        });
    });

    // sizes
    it('Image: Sizes', () => {
        element.srcset =
            'https://react.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg 320w';
        element.sizes =
            '(max-width: 320px) 280px, (max-width: 480px) 440px, 800px';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector(
                '[data-element-id="img"]'
            );
            expect(img.sizes).toBe(
                '(max-width: 320px) 280px, (max-width: 480px) 440px, 800px'
            );
        });
    });

    it('Image: Sizes[]', () => {
        element.srcset =
            'https://react.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg 320w';
        element.sizes = [
            '(max-width: 320px) 280px, (max-width: 480px) 440px, 800px'
        ];

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector(
                '[data-element-id="img"]'
            );
            expect(img.sizes).toBe(
                '(max-width: 320px) 280px, (max-width: 480px) 440px, 800px'
            );
        });
    });

    // src
    it('Image: Src', () => {
        element.src = src;

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector(
                '[data-element-id="img"]'
            );
            expect(img.src).toBe(
                'https://react.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg'
            );
        });
    });

    // srcset
    it('Image: Srcset string', () => {
        element.srcset =
            'https://react.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector(
                '[data-element-id="img"]'
            );
            expect(img.srcset).toBe(
                'https://react.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg'
            );
        });
    });

    it('Image: srcset string[]', () => {
        element.srcset = [
            'https://www.avonni.app/, https://react.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg'
        ];

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector(
                '[data-element-id="img"]'
            );
            expect(img.srcset).toBe(
                'https://www.avonni.app/, https://react.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg'
            );
        });
    });

    describe('Image: Static image', () => {
        // Static Images NO CROP
        it('Image: Static Image - No Crop - Width - No Height', () => {
            element.src = src;
            element.staticImages = true;
            element.width = '400';

            return Promise.resolve().then(() => {
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                expect(img.style.maxWidth).toBe('400px');
                expect(img.style.height).toBeFalsy();
            });
        });
        it('Image: Static Image - No Crop - No Width - Height', () => {
            element.src = src;
            element.staticImages = true;
            element.height = '400';

            return Promise.resolve().then(() => {
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                expect(img.style.maxHeight).toBe('400px');
                expect(img.style.minHeight).toBe('400px');
                expect(img.style.height).toBe('400px');
            });
        });

        it('Image: Static Image - No Crop - No Width - No Height', () => {
            element.src = src;
            element.staticImages = true;
            element.width = 400;
            element.height = 300;
            document.body.appendChild(element);

            return Promise.resolve()
                .then(() => {})
                .then(() => {
                    const img = element.shadowRoot.querySelector(
                        '[data-element-id="img"]'
                    );
                    expect(img.style.minWidth).toBe('400px');
                    expect(img.style.minHeight).toBe('300px');
                    expect(img.style.maxWidth).toBe('400px');
                    expect(img.style.maxHeight).toBe('300px');
                });
        });

        it('Image: Static Image - No Crop - Width - Height', () => {
            element.src = src;
            element.staticImages = true;
            element.height = 400;
            element.width = 400;

            return Promise.resolve()
                .then(() => {})
                .then(() => {
                    const img = element.shadowRoot.querySelector(
                        '[data-element-id="img"]'
                    );
                    expect(img.style.minWidth).toBe('400px');
                    expect(img.style.minHeight).toBe('400px');
                    expect(img.style.maxWidth).toBe('400px');
                    expect(img.style.maxHeight).toBe('400px');
                });
        });

        // Static Images - Cropped
        it('Image: Static Image - Crop 1x1 - Width - No Height', () => {
            element.src = src;
            element.staticImages = true;
            element.width = '400';
            element.cropSize = '1x1';

            return Promise.resolve().then(() => {
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                expect(img.style.maxWidth).toBe('400px');
                expect(img.style.minWidth).toBe('400px');
            });
        });
    });

    // thumbnail
    it('Image: Thumbnail', () => {
        element.src = src;
        element.thumbnail = true;

        return Promise.resolve().then(() => {
            const container = element.shadowRoot.querySelector(
                '[data-element-id="container"]'
            );
            expect(container.classList).toContain('avonni-image_thumbnail');
        });
    });

    it('Image: % on width', () => {
        element.src = src;
        element.width = '50%';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector(
                '[data-element-id="img"]'
            );
            expect(img.style.width).toBe('50%');
        });
    });

    it('Image: % on height', () => {
        element.src = src;
        element.height = '50%';

        return Promise.resolve().then(() => {
            const img = element.shadowRoot.querySelector(
                '[data-element-id="img"]'
            );
            expect(img.style.height).toBe('50%');
        });
    });

    // magnifier
    it('Image: Magnifier attributes', () => {
        element.src = src;
        const attributes = {
            position: 'top',
            horizontalOffset: '10',
            verticalOffset: '10',
            smoothMove: true,
            zoomFactor: '6',
            zoomRatioWidth: '150px',
            zoomRatioHeight: '150px'
        };
        element.magnifierAttributes = attributes;

        return Promise.resolve().then(() => {
            const magnifier = element.shadowRoot.querySelector(
                '[data-element-id="magnifier"]'
            );
            const magnifiedImage = element.shadowRoot.querySelector(
                '[data-element-id="magnified-img"]'
            );
            expect(magnifier.style.width).toBe('150px');
            expect(magnifier.style.height).toBe('150px');
            expect(magnifiedImage.style.transition).toBe(
                'transform 0.15s ease-out'
            );
        });
    });

    it('Image: Magnifier attributes - incorrect', () => {
        element.src = src;
        const attributes = {
            position: 'top',
            horizontalOffset: '10px',
            verticalOffset: '10px',
            smoothMove: true,
            zoomFactor: '6',
            zoomRatioWidth: 150,
            zoomRatioHeight: 150
        };
        element.magnifierAttributes = attributes;

        return Promise.resolve().then(() => {
            const magnifier = element.shadowRoot.querySelector(
                '[data-element-id="magnifier"]'
            );
            expect(magnifier.style.width).toBe('150px');
            expect(magnifier.style.height).toBe('150px');
            expect(element.magnifierAttributes.horizontalOffset).toBe(0);
            expect(element.magnifierAttributes.verticalOffset).toBe(0);
        });
    });

    describe('Image: Magnifier types', () => {
        it('Image: Standard magnifier mousemove', () => {
            element.src = src;
            element.magnifierType = 'standard';

            return Promise.resolve().then(() => {
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                const magnifiedImage = element.shadowRoot.querySelector(
                    '[data-element-id="magnified-img"]'
                );
                img.width = 400;
                img.height = 300;
                img.dispatchEvent(
                    new MouseEvent('mousemove', { clientX: 6, clientY: 8 })
                );
                expect(magnifiedImage.style.transform).toBe(
                    'translate(-12px, -16px)'
                );
            });
        });

        it('Image: Follow magnifier mousemove', () => {
            element.src = src;
            element.magnifierType = 'follow';

            return Promise.resolve().then(() => {
                const magnifiedImage = element.shadowRoot.querySelector(
                    '[data-element-id="magnified-img"]'
                );
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                img.width = 400;
                img.height = 300;
                img.dispatchEvent(
                    new MouseEvent('mousemove', { clientX: 10, clientY: 12 })
                );
                expect(magnifiedImage.style.transform).toBe(
                    'translate(-20px, -24px)'
                );
            });
        });

        it('Image: Inner magnifier mousemove', () => {
            element.src = src;
            element.magnifierType = 'inner';

            return Promise.resolve().then(() => {
                const magnifiedImage = element.shadowRoot.querySelector(
                    '[data-element-id="magnified-img"]'
                );
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                img.width = 400;
                img.height = 300;
                img.dispatchEvent(
                    new MouseEvent('mousemove', { clientX: 4, clientY: 5 })
                );
                expect(magnifiedImage.style.transform).toBe(
                    'translate(-8px, -10px)'
                );
            });
        });

        it('Image: Magnifier mouseout', () => {
            element.src = src;
            element.magnifierType = 'standard';

            return Promise.resolve().then(() => {
                const magnifier = element.shadowRoot.querySelector(
                    '[data-element-id="magnifier"]'
                );
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                img.dispatchEvent(new MouseEvent('mouseout'));
                expect(magnifier.style.display).toBe('none');
            });
        });
    });

    describe('Image: Magnifier boundaries', () => {
        it('Image: Magnifier boundaries - top', () => {
            element.src = src;
            element.magnifierType = 'standard';

            return Promise.resolve().then(() => {
                const magnifiedImage = element.shadowRoot.querySelector(
                    '[data-element-id="magnified-img"]'
                );
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                img.width = 400;
                img.height = 300;
                img.dispatchEvent(
                    new MouseEvent('mousemove', { clientX: 10, clientY: -5 })
                );
                expect(magnifiedImage.style.transform).toBe(
                    'translate(-20px, -0px)'
                );
            });
        });

        it('Image: Magnifier boundaries - bottom', () => {
            element.src = src;
            element.magnifierType = 'inner';

            return Promise.resolve().then(() => {
                const magnifiedImage = element.shadowRoot.querySelector(
                    '[data-element-id="magnified-img"]'
                );
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                img.width = 400;
                img.height = 300;
                img.dispatchEvent(
                    new MouseEvent('mousemove', {
                        clientX: 10,
                        clientY: img.height + 5
                    })
                );
                expect(magnifiedImage.style.transform).toBe(
                    `translate(-20px, -${
                        img.height * element.magnifierAttributes.zoomFactor
                    }px)`
                );
            });
        });

        it('Image: Magnifier boundaries - left', () => {
            element.src = src;
            element.magnifierType = 'follow';

            return Promise.resolve().then(() => {
                const magnifiedImage = element.shadowRoot.querySelector(
                    '[data-element-id="magnified-img"]'
                );
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                img.width = 400;
                img.height = 300;
                img.dispatchEvent(
                    new MouseEvent('mousemove', { clientX: -5, clientY: 10 })
                );
                expect(magnifiedImage.style.transform).toBe(
                    'translate(-0px, -20px)'
                );
            });
        });

        it('Image: Magnifier boundaries - right', () => {
            element.src = src;
            element.magnifierType = 'standard';

            return Promise.resolve().then(() => {
                const magnifiedImage = element.shadowRoot.querySelector(
                    '[data-element-id="magnified-img"]'
                );
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                img.width = 400;
                img.height = 300;
                img.dispatchEvent(
                    new MouseEvent('mousemove', {
                        clientX: img.width + 5,
                        clientY: 10
                    })
                );
                expect(magnifiedImage.style.transform).toBe(
                    `translate(-${
                        img.width * element.magnifierAttributes.zoomFactor
                    }px, -20px)`
                );
            });
        });
    });

    describe('Image: Standard magnifier auto position', () => {
        const attributes = {
            position: 'auto',
            horizontalOffset: 10,
            verticalOffset: 10
        };

        beforeEach(() => {
            element.src = src;
            element.magnifierType = 'standard';
            element.magnifierAttributes = attributes;
        });

        it('Image: Standard magnifier auto position - image left', () => {
            element.position = 'left';

            return Promise.resolve().then(() => {
                const magnifier = element.shadowRoot.querySelector(
                    '[data-element-id="magnifier"]'
                );
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                const top = attributes.verticalOffset + 'px';
                const left = img.width + attributes.horizontalOffset + 'px';
                img.dispatchEvent(new MouseEvent('mousemove'));
                expect(magnifier.style.top).toBe(top);
                expect(magnifier.style.left).toBe(left);
            });
        });

        it('Image: Standard magnifier auto position - image center', () => {
            element.position = 'center';

            return Promise.resolve().then(() => {
                const magnifier = element.shadowRoot.querySelector(
                    '[data-element-id="magnifier"]'
                );
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                const top = attributes.verticalOffset + 'px';
                const left = img.width + attributes.horizontalOffset + 'px';
                img.dispatchEvent(new MouseEvent('mousemove'));
                expect(magnifier.style.top).toBe(top);
                expect(magnifier.style.left).toBe(left);
            });
        });

        it('Image: Standard magnifier auto position - image right', () => {
            element.position = 'right';

            return Promise.resolve().then(() => {
                const magnifier = element.shadowRoot.querySelector(
                    '[data-element-id="magnifier"]'
                );
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                const top = attributes.verticalOffset + 'px';
                const left =
                    '-' +
                    magnifier.offsetWidth -
                    attributes.horizontalOffset +
                    'px';
                img.dispatchEvent(new MouseEvent('mousemove'));
                expect(magnifier.style.top).toBe(top);
                expect(magnifier.style.left).toBe(left);
            });
        });
    });

    describe('Image: Standard magnifier manual position', () => {
        const attributes = {
            position: 'left',
            horizontalOffset: 10,
            verticalOffset: 10
        };

        beforeEach(() => {
            element.src = src;
            element.magnifierType = 'standard';
        });

        it('Image: Standard magnifier manual position - left', () => {
            attributes.position = 'left';
            element.magnifierAttributes = attributes;

            return Promise.resolve().then(() => {
                const magnifier = element.shadowRoot.querySelector(
                    '[data-element-id="magnifier"]'
                );
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                const top = attributes.verticalOffset + 'px';
                const left = '-' + attributes.horizontalOffset + 'px';
                img.dispatchEvent(new MouseEvent('mousemove'));
                expect(magnifier.style.top).toBe(top);
                expect(magnifier.style.left).toBe(left);
            });
        });

        it('Image: Standard magnifier manual position - right', () => {
            attributes.position = 'right';
            element.magnifierAttributes = attributes;

            return Promise.resolve().then(() => {
                const magnifier = element.shadowRoot.querySelector(
                    '[data-element-id="magnifier"]'
                );
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                const top = attributes.verticalOffset + 'px';
                const left = img.width + attributes.horizontalOffset + 'px';
                img.dispatchEvent(new MouseEvent('mousemove'));
                expect(magnifier.style.top).toBe(top);
                expect(magnifier.style.left).toBe(left);
            });
        });

        it('Image: Standard magnifier manual position - top', () => {
            attributes.position = 'top';
            element.magnifierAttributes = attributes;

            return Promise.resolve().then(() => {
                const magnifier = element.shadowRoot.querySelector(
                    '[data-element-id="magnifier"]'
                );
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                const top =
                    '-' +
                    magnifier.offsetHeight -
                    attributes.verticalOffset +
                    'px';
                const left = attributes.horizontalOffset + 'px';
                img.dispatchEvent(new MouseEvent('mousemove'));
                expect(magnifier.style.top).toBe(top);
                expect(magnifier.style.left).toBe(left);
            });
        });

        it('Image: Standard magnifier manual position - bottom', () => {
            attributes.position = 'bottom';
            element.magnifierAttributes = attributes;

            return Promise.resolve().then(() => {
                const magnifier = element.shadowRoot.querySelector(
                    '[data-element-id="magnifier"]'
                );
                const img = element.shadowRoot.querySelector(
                    '[data-element-id="img"]'
                );
                const top = img.height + attributes.verticalOffset + 'px';
                const left = attributes.horizontalOffset + 'px';
                img.dispatchEvent(new MouseEvent('mousemove'));
                expect(magnifier.style.top).toBe(top);
                expect(magnifier.style.left).toBe(left);
            });
        });
    });
});
