import {
it,
iit,
describe,
ddescribe,
expect,
inject,
injectAsync,
TestComponentBuilder,
beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {Ng2DurationPipe} from './ng2-duration.pipe';

describe('Ng2DurationPipe', () => {
    beforeEachProviders(() => [Ng2DurationPipe]);

    it('transforms 123 to "123 minutes"', inject([Ng2DurationPipe], (pipe:Ng2DurationPipe) => {
        expect(pipe.transform(123)).toEqual('123 minutes');
    }));

    it('transforms 1 into "1 minute"', inject([Ng2DurationPipe], (pipe:Ng2DurationPipe) => {
        expect(pipe.transform(1)).toEqual('1 minute');
    }));

    it('leaves "123 minutes" unchanged', inject([Ng2DurationPipe], (pipe:Ng2DurationPipe) => {
        expect(pipe.transform('123 minutes')).toEqual('123 minutes');
    }));

    it('leaves Null values unchanged', inject([Ng2DurationPipe], (pipe:Ng2DurationPipe) => {
        expect(pipe.transform(null)).toBeNull();
    }));
});