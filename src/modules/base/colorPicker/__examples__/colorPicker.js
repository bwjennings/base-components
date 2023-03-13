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

import Component from 'avonni/colorPicker';

customElements.define(
    'ac-base-color-picker',
    Component.CustomElementConstructor
);

export const ColorPicker = ({
    columns,
    disabled,
    readOnly,
    required,
    inline,
    isLoading,
    label,
    name,
    fieldLevelHelp,
    hideClearIcon,
    paletteShowCheckmark,
    paletteHideOutline,
    paletteTileHeight,
    paletteTileWidth,
    value,
    variant,
    type,
    menuVariant,
    menuIconName,
    menuIconSize,
    menuLabel,
    menuAlignment,
    menuNubbin,
    colors,
    hideColorInput,
    opacity,
    messageWhenBadInput,
    tokens,
    messageWhenValueMissing,
    groups
}) => {
    const element = document.createElement('ac-base-color-picker');
    element.columns = columns;
    element.disabled = disabled;
    element.hideClearIcon = hideClearIcon;
    element.readOnly = readOnly;
    element.required = required;
    element.inline = inline;
    element.paletteHideOutline = paletteHideOutline;
    element.paletteShowCheckmark = paletteShowCheckmark;
    element.paletteTileHeight = paletteTileHeight;
    element.paletteTileWidth = paletteTileWidth;
    element.isLoading = isLoading;
    element.label = label;
    element.name = name;
    element.fieldLevelHelp = fieldLevelHelp;
    element.value = value;
    element.variant = variant;
    element.type = type;
    element.menuVariant = menuVariant;
    element.menuIconName = menuIconName;
    element.menuIconSize = menuIconSize;
    element.menuLabel = menuLabel;
    element.menuAlignment = menuAlignment;
    element.menuNubbin = menuNubbin;
    element.colors = colors;
    element.hideColorInput = hideColorInput;
    element.opacity = opacity;
    element.messageWhenBadInput = messageWhenBadInput;
    element.tokens = tokens;
    element.messageWhenValueMissing = messageWhenValueMissing;
    element.groups = groups;
    return element;
};
