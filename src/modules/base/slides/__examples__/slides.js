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

import Component from '../../storybookWrappers/slides/slides';

customElements.define('ac-base-slides', Component.CustomElementConstructor);

export const Slides = ({
    slidesPerView,
    spaceBetween,
    autoplayDelay,
    initialSlide,
    speed,
    buttonPreviousIconName,
    buttonPreviousLabel,
    buttonNextIconName,
    buttonNextLabel,
    fractionPrefixLabel,
    fractionLabel,
    width,
    height,
    coverflowSlideWidth,
    coverflowSlideHeight,
    direction,
    effect,
    buttonPreviousIconPosition,
    buttonPreviousVariant,
    buttonNextIconPosition,
    buttonNextVariant,
    buttonPosition,
    indicatorType,
    indicatorPosition,
    navigation,
    buttonInner,
    indicators,
    indicatorInner,
    loop
}) => {
    const element = document.createElement('ac-base-slides');
    element.slidesPerView = slidesPerView;
    element.spaceBetween = spaceBetween;
    element.autoplayDelay = autoplayDelay;
    element.initialSlide = initialSlide;
    element.speed = speed;
    element.buttonPreviousIconName = buttonPreviousIconName;
    element.buttonPreviousLabel = buttonPreviousLabel;
    element.buttonNextIconName = buttonNextIconName;
    element.buttonNextLabel = buttonNextLabel;
    element.fractionPrefixLabel = fractionPrefixLabel;
    element.fractionLabel = fractionLabel;
    element.width = width;
    element.height = height;
    element.coverflowSlideWidth = coverflowSlideWidth;
    element.coverflowSlideHeight = coverflowSlideHeight;
    element.direction = direction;
    element.effect = effect;
    element.buttonPreviousIconPosition = buttonPreviousIconPosition;
    element.buttonPreviousVariant = buttonPreviousVariant;
    element.buttonNextIconPosition = buttonNextIconPosition;
    element.buttonNextVariant = buttonNextVariant;
    element.buttonPosition = buttonPosition;
    element.indicatorType = indicatorType;
    element.indicatorPosition = indicatorPosition;
    element.navigation = navigation;
    element.buttonInner = buttonInner;
    element.indicators = indicators;
    element.indicatorInner = indicatorInner;
    element.loop = loop;
    return element;
};
