/// <reference path="./../../typings/tsd.d.ts" />

import {Component, View, OnInit, NgIf} from 'angular2/angular2';
import {tokenNotExpired} from 'angular2-jwt/angular2-jwt';

@Component({
	selector: 'auth',
	templateUrl: 'app/auth/auth.component.html',
	directives: [NgIf]
})

export class AuthComponent implements OnInit {

	lock = new Auth0Lock('F2XiUyp1CQF1llzUDDQ2h0be76PPb96m', 'kgs916.auth0.com');
	
	constructor() { }

	onInit() { }

	login() {
		 this.lock.show(function(err, profile, id_token) {

      if(err) {
        throw new Error(err.message);
      }

      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('id_token', id_token);

    });
	}
	
	logout() {
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
  }

  loggedIn() {
    return tokenNotExpired();
  }
}