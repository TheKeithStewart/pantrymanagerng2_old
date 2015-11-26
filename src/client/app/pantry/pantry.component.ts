import {Component} from 'angular2/angular2';
import {CanActivate} from 'angular2/router';
import {tokenNotExpired} from 'angular2-jwt/angular2-jwt';

@Component({
	selector: 'pantry',
	template: `
		<div>pantry</div>
	`
})
@CanActivate(() => tokenNotExpired())
export class PantryComponent {
	
}