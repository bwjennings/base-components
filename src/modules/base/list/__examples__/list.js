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

import Component from 'c/list';

customElements.define('ac-base-list', Component.CustomElementConstructor);

export const List = ({
    actions,
    alternativeText,
    cols,
    divider,
    enableInfiniteLoading,
    imageAttributes,
    isLoading,
    items,
    label,
    largeContainerCols,
    loadMoreOffset,
    mediaActions,
    mediumContainerCols,
    smallContainerCols,
    sortable,
    sortableIconName,
    sortableIconPosition,
    variant,
}) => {
    const element = document.createElement('ac-base-list');
    element.actions = actions;
    element.alternativeText = alternativeText;
    element.cols = cols;
    element.divider = divider;
    element.enableInfiniteLoading = enableInfiniteLoading;
    element.imageAttributes = imageAttributes;
    element.isLoading = isLoading;
    element.items = items;
    element.label = label;
    element.largeContainerCols = largeContainerCols;
    element.loadMoreOffset = loadMoreOffset;
    element.mediaActions = mediaActions;
    element.mediumContainerCols = mediumContainerCols;
    element.smallContainerCols = smallContainerCols;
    element.sortable = sortable;
    element.sortableIconName = sortableIconName;
    element.sortableIconPosition = sortableIconPosition;
    element.variant = variant;
    return element;
};
