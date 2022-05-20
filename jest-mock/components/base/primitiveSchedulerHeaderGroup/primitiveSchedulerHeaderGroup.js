import { LightningElement, api } from 'lwc';
import { dateTimeObjectFrom, addToDate } from 'c/utilsPrivate';

export default class PrimitiveSchedulerHeaderGroup extends LightningElement {
    @api availableDaysOfTheWeek;
    @api availableMonths;
    @api availableTimeFrames;
    @api availableTimeSpans;
    @api headers;
    @api scrollLeftOffset;
    @api timeSpan;
    @api visibleInterval;

    _start;

    connectedCallback() {
        if (!this.start) {
            throw new Error('Please set a valid start date');
        }

        // Create the smallestHeader
        const columns = [];
        let start = this.start;
        for (let i = 0; i < 100; i++) {
            const end = start.endOf('day');
            columns.push({
                start: start.ts,
                end: end.ts
            });
            start = addToDate(start, 'day', 1).startOf('day');
        }

        this.dispatchEvent(
            new CustomEvent('privateheaderchange', {
                detail: {
                    smallestHeader: {
                        columns,
                        start: this.start,
                        end: columns[columns.length - 1].end
                    }
                }
            })
        );
    }

    @api
    get start() {
        return this._start;
    }
    set start(value) {
        this._start = dateTimeObjectFrom(value);
    }
}
