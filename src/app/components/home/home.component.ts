import { AdalService } from 'adal-angular4';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    tenant = '';
    clientId = '';

    constructor(private adalService: AdalService) { }

    ngOnInit(): void {
        this.tenant = localStorage.getItem('tenant');
        this.clientId = localStorage.getItem('clientId');
    }

    get authenticated() {
        return this.adalService.userInfo.authenticated;
    }

    get token() {
        return this.adalService.userInfo.token;
    }

    login($event) {
        localStorage.setItem('tenant', this.tenant);
        localStorage.setItem('clientId', this.clientId);

        this.adalService.init({
            tenant: this.tenant,
            clientId: this.clientId,
            redirectUri: window.location.origin + '/loginredirect'
        });

        this.adalService.login();
    }

    logout($event) {
        localStorage.clear();
        this.adalService.logOut();
    }
}
