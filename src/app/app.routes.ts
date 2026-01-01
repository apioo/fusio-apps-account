import {Routes} from '@angular/router';
import {AccountRoute, AuthorizationRoute, isAuthenticated} from "ngx-fusio-sdk";
import {AccountComponent} from "./account/account.component";

export const routes: Routes = [
  {path: '', component: AccountComponent, canActivate: [isAuthenticated]},
  {path: 'account', component: AccountComponent, canActivate: [isAuthenticated], children: AccountRoute.getAll()},
  ...AuthorizationRoute.getAll(),
];
