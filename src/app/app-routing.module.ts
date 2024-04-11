import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AccountComponent} from "./account/account.component";
import {AccountRoute, AuthorizationRoute, isAuthenticated} from "ngx-fusio-sdk";

const routes: Routes = [
  { path: '', component: AccountComponent, canActivate: [isAuthenticated] },
  { path: 'account', component: AccountComponent, canActivate: [isAuthenticated], children: AccountRoute.getAll()},

];

routes.push(...AuthorizationRoute.getAll());

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
