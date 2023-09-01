
import { LightningElement, api } from 'lwc';

export default class CustomLabelSlider extends LightningElement {
    @api label;
    @api size;
    @api type;
    @api variant;
    @api unit;
    @api unitAttributes;
    @api value;
    @api showPin;
    @api min;
    @api max;
    @api step;
    @api disabled;
    @api tickMarkStyle;
    @api showTickMarks;
    @api disableSwap;
    @api hideMinMaxValues;
    @api hideTrack;
    @api minimumDistance;
}
