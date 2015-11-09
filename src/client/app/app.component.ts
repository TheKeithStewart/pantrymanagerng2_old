import {Component, View} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config';
import {HeaderComponent, FooterComponent} from './layout/layout.components'

@Component({
	selector: 'pantry-manager'
})
@View({
	templateUrl: 'app/app.component.html',
	directives: [ROUTER_DIRECTIVES, HeaderComponent, FooterComponent]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
	public title = 'Pantry Manager';
	public routes = Routes;
}