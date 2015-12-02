import {Pipe} from 'angular2/angular2';

@Pipe({
	name: 'duration'
})
export class Ng2DurationPipe {

	transform(rawDuration: any): string {
		if (!rawDuration) {
			return null;
		} else if (isNaN(rawDuration)) {
			return rawDuration;
		} else {
			return rawDuration + " " + (rawDuration === 1 ? "minute" : "minutes");
		}
	}

}