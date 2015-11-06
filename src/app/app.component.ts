import {Component} from 'angular2/angular2';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Routes, APP_ROUTES} from './route.config';

@Component({
	selector: 'pantry-manager',
	template: `
		<h1>{{ title }}</h1>
		<a [router-link]="['/' + routes.recipes.as]" class="router-link">Recipes</a>
		<a [router-link]="['/' + routes.pantry.as]" class="router-link">Pantry</a>
		<router-outlet></router-outlet>
	`,
	directives: [ROUTER_DIRECTIVES]
})
@RouteConfig(APP_ROUTES)
export class AppComponent {
	public title = 'Pantry Manager';
	public routes = Routes;
}