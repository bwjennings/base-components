import Component from '../../storybookWrappers/image/imageList';

customElements.define('ac-image-list', Component.CustomElementConstructor);

export const ImageList = ({
    alternativeText,
    cropFit,
    cropPositionX,
    cropPositionY,
    cropSize,
    fluid,
    fluidGrow,
    height,
    lazyLoading,
    position,
    sizes,
    src,
    srcset,
    staticImages,
    thumbnail,
    width,
    magnifierType,
    magnifierAttributes,
    compareSrc,
    compareAttributes
}) => {
    const element = document.createElement('ac-image-list');
    element.alternativeText = alternativeText;
    element.cropFit = cropFit;
    element.cropPositionX = cropPositionX;
    element.cropPositionY = cropPositionY;
    element.cropSize = cropSize;
    element.fluid = fluid;
    element.fluidGrow = fluidGrow;
    element.height = height;
    element.lazyLoading = lazyLoading;
    element.position = position;
    element.sizes = sizes;
    element.src = src;
    element.srcset = srcset;
    element.staticImages = staticImages;
    element.thumbnail = thumbnail;
    element.width = width;
    element.magnifierType = magnifierType;
    element.magnifierAttributes = magnifierAttributes;
    element.compareSrc = compareSrc;
    element.compareAttributes = compareAttributes;
    return element;
};
