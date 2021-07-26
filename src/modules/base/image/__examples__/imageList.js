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

import Component from '../../storybookWrappers/image/imageList';

customElements.define('ac-image-list', Component.CustomElementConstructor);

export const ImageList = ({
    src,
    srcset,
    sizes,
    alt,
    width,
    height,
    block,
    fluid,
    fluidGrow,
    rounded,
    thumbnail,
    left,
    right,
    center,
    blank,
    blankColor,
    cropSize,
    cropFit,
    cropPositionX,
    cropPositionY,
    staticImages,
    lazyLoading
}) => {
    const element = document.createElement('ac-image-list');
    element.src = src;
    element.srcset = srcset;
    element.sizes = sizes;
    element.alt = alt;
    element.width = width;
    element.height = height;
    element.block = block;
    element.fluid = fluid;
    element.fluidGrow = fluidGrow;
    element.rounded = rounded;
    element.thumbnail = thumbnail;
    element.left = left;
    element.right = right;
    element.center = center;
    element.blank = blank;
    element.blankColor = blankColor;
    element.cropSize = cropSize;
    element.cropFit = cropFit;
    element.cropPositionX = cropPositionX;
    element.cropPositionY = cropPositionY;
    element.staticImages = staticImages;
    element.lazyLoading = lazyLoading;

    return element;
};
