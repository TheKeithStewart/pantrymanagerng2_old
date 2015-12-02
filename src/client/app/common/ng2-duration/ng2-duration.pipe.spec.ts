import {Ng2DurationPipe} from './ng2-duration.pipe';

describe('Ng2DurationPipe', () => {
	let pipe: Ng2DurationPipe;
	
	beforeEach(() => {
		pipe = new Ng2DurationPipe;
	});
	
	it('transforms 123 to "123 minutes"', () => {
		expect(pipe.transform(123)).toEqual('123 minutes');
	});
	
	it('transforms 1 into "1 minute"', () => {
		expect(pipe.transform(1)).toEqual('1 minute');
	});
	
	it('leaves "123 minutes" unchanged', () => {
		expect(pipe.transform('123 minutes')).toEqual('123 minutes');
	});
	
	it('leaves Null values unchanged', () => {
		expect(pipe.transform(null)).toBeNull();
	});
});