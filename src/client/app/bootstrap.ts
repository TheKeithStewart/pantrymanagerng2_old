import {bootstrap, provide} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router'
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {AppComponent} from './app.component';
import {RecipeService} from './recipes/recipe.service';
import {AuthHttp} from 'angular2-jwt/angular2-jwt';

bootstrap(AppComponent, [
	ROUTER_PROVIDERS, 
	HTTP_PROVIDERS,
	RecipeService,
	provide(AuthHttp, {useFactory: () => {
		return new AuthHttp();
	}})
]);