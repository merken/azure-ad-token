import { AdalService } from 'adal-angular4';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login-redirect',
    templateUrl: './loginredirect.component.html',
    styleUrls: ['./loginredirect.component.css']
})
export class LoginRedirectComponent implements OnInit {
    constructor(private adalService: AdalService, private router: Router) { }

    ngOnInit() {

        const tenant = localStorage.getItem('tenant');
        const clientId = localStorage.getItem('clientId');

        const canAuthenticate = tenant && clientId;

        if (!canAuthenticate) {
            this.router.navigate(['/']);
        } else {
            this.adalService.init({
                tenant: tenant,
                clientId: clientId,
                redirectUri: window.location.origin + '/loginredirect'
            });

            this.adalService.handleWindowCallback();

            if (this.adalService.userInfo.authenticated) {
                this.router.navigate(['/']);
            } else {
                this.router.navigate(['/error']);
            }
        }
    }
