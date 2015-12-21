


import {bootstrap} from 'angular2/platform/browser';

import {provide} from 'angular2/core';

import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {AppComponent} from './app/app.component';
import {RecipeService} from './app/recipes/recipe.service';
// import {AuthHttp} from 'angular2-jwt';

// bootstrap(
//     AppComponent, [
//         ROUTER_PROVIDERS, 
//         HTTP_PROVIDERS,
//         RecipeService,
//         provide(AuthHttp, {useFactory: () => {
//             return new AuthHttp();
//         }}
//     )
// ]
// );


// import {bootstrap} from 'angular2/platform/browser';

import {Component} from 'angular2/core';

@Component({
    selector: 'pantry-manager',
    template: `
        <div>{{title}}</div>
    `,
})
class AngularCliSandboxApp {
    title = 'Pantry Manager';
}

bootstrap(AppComponent, [
    ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        RecipeService,
        // provide(AuthHttp, {useFactory: () => {
        //     return new AuthHttp();
        // }}
    // )
]);