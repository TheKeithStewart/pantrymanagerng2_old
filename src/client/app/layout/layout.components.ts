import {Component, View} from 'angular2/angular2';

@Component({
	selector: 'header'
})
@View({
	templateUrl: 'app/layout/header.component.html'
})
export class HeaderComponent {
	public title: string;

	constructor() {
		this.title = "Pantry Manager";
	}
}

@Component({
	selector: 'footer'
})
@View({
	templateUrl: 'app/layout/footer.component.html'
})
export class FooterComponent {
	public appVersion: string;

	constructor() {
		this.appVersion = "0.0.1";
	}
}