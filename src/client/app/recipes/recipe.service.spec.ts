import {
    beforeEachProviders,
    describe,
    expect,
    iit,
    inject,
    it,
    injectAsync,
    fakeAsync,
    TestComponentBuilder,
    tick
} from 'angular2/testing';
import { Component, provide } from 'angular2/core';
import { MockBackend, BaseRequestOptions, Http } from 'angular2/http';

import { AppComponent } from './../app.component';
import { RecipeService } from './recipe.service';

describe('Service: recipe.service', () => {
	
    beforeEachProviders(() => [
        AppComponent,
        RecipeService,
        BaseRequestOptions,
        MockBackend,
        provide(Http, {useFactory: function(backend, defaultOptions) {
            return new Http(backend, defaultOptions);
        }, deps: [MockBackend, BaseRequestOptions]})
    ]);
    
	xit('should have recipes', inject([RecipeService], (recipeService: RecipeService) => {
        var recipes = recipeService.getRecipes();
        expect(recipes).not.toBeNull();
    }));
	
});