import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginRedirectComponent } from './components/loginredirect/loginredirect.component';
import { ErrorComponent } from './components/error/error.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'loginredirect', component: LoginRedirectComponent },
  { path: 'error', component: ErrorComponent },
];

export const AppRoutes = RouterModule.forRoot(routes);
