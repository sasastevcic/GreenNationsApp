import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { CountryDetailComponent } from './country-detail/country-detail.component';
import { CountryMaintComponent } from './country-maint/country-maint.component';
import { CountryListComponent } from './country-list/country-list.component';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { SignInComponent } from 'src/fw/users/sign-in/sign-in.component';
import { RegisterUserComponent } from 'src/fw/users/register-user/register-user.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'authenticated', component: AuthenticatedUserComponent, canActivate: [AuthGuard],
      children: [
        { path: '', canActivateChild: [AuthGuard],
        children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', component: DashboardComponent },
          { path: 'country-list/:count', component: CountryListComponent },
          { path: 'country-detail/:id/:operation', component: CountryDetailComponent },
          { path: 'country-maint', component: CountryMaintComponent },
          { path: 'settings', component: SettingsComponent }
        ]}
    ] },
  { path: '', component: SignInComponent },
  { path: '**', component: SignInComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
