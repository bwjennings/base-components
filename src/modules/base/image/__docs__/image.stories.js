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

import { Image } from '../__examples__/image';

import { ImageList } from '../__examples__/imageList';

export default {
    title: 'Example/Image',
    argTypes: {
        alternativeText: {
            name: 'Alternative text',
            control: {
                type: 'text'
            },
            description: "The value to set for the 'alt' attribute.",
            table: {
                type: { summary: 'string' }
            }
        },
        cropFit: {
            name: 'crop-fit',
            control: {
                type: 'select'
            },
            options: ['cover', 'contain', 'fill', 'none'],
            description:
                'Specifies the "fit" behaviour for the cropped image. Options: "cover"(default), "contain", "fill", "none"',
            table: {
                defaultValue: { summary: 'cover' },
                type: { summary: 'string' },
                category: 'Crop'
            }
        },
        cropPositionX: {
            name: 'crop-position-X(%)',
            control: {
                type: 'number',
                min: 0,
                max: 100,
                step: 1
            },
            description:
                'Specifies the cropping point of interest on the X axis of the image, in percentage',
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: '50' },
                category: 'Crop',
                detail: 'Percent'
            }
        },
        cropPositionY: {
            name: 'crop-position-Y(%)',
            control: {
                type: 'number',
                min: 0,
                max: 100,
                step: 1
            },
            description:
                'Specifies the cropping point of interest on the Y axis of the image, in percentage',
            table: {
                defaultValue: { summary: '50' },
                type: { summary: 'string' },
                category: 'Crop',
                detail: 'Percent'
            }
        },
        cropSize: {
            name: 'crop-size',
            control: {
                type: 'select'
            },
            options: ['1x1', '4x3', '16x9', 'none'],
            description:
                'Specifies the cropping ratio for the image, which is constrained to the parents width. Options : 1:1, 4:3, 16:9, none',
            table: {
                defaultValue: { summary: 'none' },
                type: { summary: 'string' },
                category: 'Crop'
            }
        },
        fluid: {
            control: {
                type: 'boolean'
            },
            description: '',
            table: {
                defaultValue: { summary: false },
                type: { summary: 'boolean' }
            }
        },
        fluidGrow: {
            name: 'fluid-grow',
            control: {
                type: 'boolean'
            },
            description:
                "Makes the image responsive. The image will shrink as needed or grow up the the image's native width.",
            table: {
                defaultValue: { summary: false },
                type: { summary: 'boolean' }
            }
        },
        height: {
            control: {
                type: 'text'
            },
            description: "The value to set on the image's 'height' attribute.",
            table: {
                type: { summary: 'string' }
            }
        },
        lazyLoading: {
            name: 'lazy-loading',
            control: {
                type: 'select'
            },
            options: ['auto', 'lazy'],
            description:
                'Enables lazy loading for images that are offscreen. If set to lazy, the property ensures that offscreen images are loaded early enough so that they have finished loading once the user scrolls near them. Valid values are auto and lazy. Note: Keep in mind that the property uses the loading attribute of HTML <img> element which is not supported for Internet Explorer.',
            table: {
                default: { summary: 'auto' },
                type: { summary: 'string' }
            }
        },
        position: {
            control: {
                type: 'select'
            },
            options: ['left', 'right', 'center'],
            description:
                'Specifies the position of the image. Valid values include left, center and right.',
            table: {
                defaultValue: { summary: 'left' },
                type: { summary: 'string' }
            }
        },
        sizes: {
            control: {
                type: 'text'
            },
            description:
                'One or more strings separated by commas (or an array of strings), indicating a set of source sizes. Optionally used in combination with the srcset prop.',
            table: {
                type: { summary: 'string' }
            }
        },
        src: {
            control: {
                type: 'object'
            },
            description: "URL to set for the 'src' attribute.",
            table: {
                type: { summary: 'string' }
            }
        },
        srcset: {
            control: {
                type: 'text'
            },
            description:
                'One or more strings separated by commas (or an array of strings), indicating possible image sources for the user agent to use.',
            table: {
                type: { summary: 'string' }
            }
        },
        staticImages: {
            name: 'static-images',
            control: {
                type: 'boolean'
            },
            description:
                'Set Images as Static - images will be fixed dimensions and will not be responsive on resize',
            table: {
                default: { summary: false },
                type: { summary: 'boolean' }
            }
        },
        thumbnail: {
            control: {
                type: 'boolean'
            },
            description: 'Adds a thumbnail border around the image.',
            table: {
                defaultValue: { summary: false },
                type: { summary: 'boolean' }
            }
        },
        width: {
            control: {
                type: 'text'
            },
            description: "The value to set on the image's 'width' attribute.",
            table: {
                type: { summary: 'string' }
            }
        }
    },
    args: {
        cropFit: 'cover',
        cropPositionX: 50,
        cropPositionY: 50,
        cropSize: 'none',
        fluid: false,
        fluidGrow: false,
        lazyLoading: 'auto',
        position: 'left',
        staticImages: false,
        thumbnail: false
    }
};

const Template = (args) => Image(args);

const ListTemplate = (args) => ImageList(args);

export const Base = Template.bind({});
Base.args = {
    src: 'https://react.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg',
    alternativeText: 'Alternative text'
};

export const BaseSmall = Template.bind({});
BaseSmall.args = {
    src: 'https://react.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg',
    alternativeText: 'Alternative text',
    width: '150'
};

export const BaseLarge = Template.bind({});
BaseLarge.args = {
    src: 'https://react.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg',
    alternativeText: 'Alternative text',
    width: '600'
};

export const BaseWithLazyLoading = ListTemplate.bind({});
BaseWithLazyLoading.args = {
    src: [
        'https://react.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg',
        'https://react.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg',
        'https://react.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg',
        'https://www.lightningdesignsystem.com/assets/images/avatar2.jpg',
        'https://www.lightningdesignsystem.com/assets/images/avatar1.jpg',
        'https://www.lightningdesignsystem.com/assets/images/avatar3.jpg',
        'https://ik.imagekit.io/demo/img/image1.jpeg?tr=w-400,h-300',
        'https://ik.imagekit.io/demo/img/image2.jpeg?tr=w-400,h-300',
        'https://ik.imagekit.io/demo/img/image4.jpeg?tr=w-400,h-300',
        'https://ik.imagekit.io/demo/img/image5.jpeg?tr=w-400,h-300',
        'https://ik.imagekit.io/demo/img/image6.jpeg?tr=w-400,h-300',
        'https://ik.imagekit.io/demo/img/image7.jpeg?tr=w-400,h-300',
        'https://ik.imagekit.io/demo/img/image8.jpeg?tr=w-400,h-300',
        'https://ik.imagekit.io/demo/img/image9.jpeg?tr=w-400,h-300',
        'https://ik.imagekit.io/demo/img/image10.jpeg?tr=w-400,h-300'
    ],
    width: '400',
    alternativeText: 'Alternative text',
    lazyLoading: 'lazy'
};

export const Thumbnail = Template.bind({});
Thumbnail.args = {
    src: 'https://react.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg',
    alternativeText: 'Alternative text',
    thumbnail: true
};

export const Center = Template.bind({});
Center.args = {
    src: 'https://react.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg',
    alternativeText: 'Alternative text',
    position: 'center',
    width: '600'
};

export const Right = Template.bind({});
Right.args = {
    src: 'https://react.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg',
    alternativeText: 'Alternative text',
    position: 'right',
    width: '600'
};

export const CropImageStaticThumbnailMobile = Template.bind({});
CropImageStaticThumbnailMobile.parameters = {
    viewport: {
        defaultViewport: 'mobile1'
    }
};
CropImageStaticThumbnailMobile.args = {
    src: 'https://react.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg',
    alternativeText: 'Alternative text',
    width: '280',
    cropSize: '1x1',
    cropFit: 'none',
    cropPositionX: '23',
    cropPositionY: '80',
    thumbnail: true,
    staticImages: true
};
