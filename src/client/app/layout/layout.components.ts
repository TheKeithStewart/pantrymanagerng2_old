import {Component, View} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {APP_ROUTES} from './../route.config';

@Component({
	selector: 'navbar',
	inputs: ['title', 'routes']
})
@View({
	templateUrl: 'app/layout/navbar.component.html',
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig(APP_ROUTES)	
class NavBar {

}

@Component({
	selector: 'header',
	inputs: ['routes']
})
@View({
	templateUrl: 'app/layout/header.component.html',
	directives: [NavBar]
})
export class HeaderComponent {
	title: string;

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
	appVersion: string;

	constructor() {
		this.appVersion = "0.0.1";
	}
}