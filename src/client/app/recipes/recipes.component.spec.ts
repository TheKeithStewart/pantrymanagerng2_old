import {
	iit,
	it,
	ddescribe,
	describe,
	expect,
	inject,
	injectAsync,
	TestComponentBuilder,
	beforeEachProviders,
	fakeAsync,
	tick
} from 'angular2/testing';
import {Component, provide} from 'angular2/core';

import {RecipesComponent} from './recipes.component';
import {RecipeService} from './recipe.service'

describe('Component: Recipes', () => {
  
  beforeEachProviders(() => []);

  xit('should ...', injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    return tcb.createAsync(RecipesComponent).then((fixture) => {
      fixture.detectChanges();
    });
  }));

});
