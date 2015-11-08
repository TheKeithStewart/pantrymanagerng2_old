import {bootstrap} from 'angular2/angular2';
import {ROUTER_PROVIDERS} from 'angular2/router'
import {AppComponent} from './app.component';
import {RecipeService} from './recipes/recipe.service';

bootstrap(AppComponent, [ROUTER_PROVIDERS, RecipeService]);