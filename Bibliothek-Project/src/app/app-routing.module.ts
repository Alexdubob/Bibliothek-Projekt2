import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from 'src/components/profile/profile.component';
import { LoginComponent } from 'src/components/login/login.component';
import { ListComponent } from 'src/components/list/list.component';
import { SearchComponent } from 'src/components/search/search.component';
import { SignInComponent } from 'src/components/sign-in/sign-in.component';

const routes: Routes = [
  { path: 'search', component: SearchComponent },
  { path: 'list', component: ListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
