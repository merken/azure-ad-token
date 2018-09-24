import { AppRoutes } from './app.module.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdalService, AdalGuard } from 'adal-angular4';
import { ClipboardModule } from 'ngx-clipboard';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { LoginRedirectComponent } from './components/loginredirect/loginredirect.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginRedirectComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AdalService,
    AdalGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
