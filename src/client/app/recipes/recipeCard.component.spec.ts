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
import {provide} from 'angular2/core';

import {RecipeCardComponent} from './recipeCard.component';

describe('Component: RecipeCardComponent', () => {
	var recipeCard: RecipeCardComponent;
	
	beforeEach(() => {
		recipeCard = new RecipeCardComponent();
	});
	
	it('should be present', () => {
		expect(recipeCard).not.toBeNull();
	});
});
