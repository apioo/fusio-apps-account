import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from "@angular/common/http";
import {ApiService as SDK, FusioSdkModule} from "ngx-fusio-sdk";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ConfigBuilder} from "./config-builder";
import {ApiService} from "./api.service";
import {AccountComponent} from './account/account.component';

@NgModule({
  declarations: [
    AppComponent,
    AccountComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    FusioSdkModule.forRoot(ConfigBuilder.build())
  ],
  providers: [
    {
      provide: SDK,
      useExisting: ApiService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

declare global {
  var FUSIO_URL: string | undefined;
  var FUSIO_APP_KEY: string | undefined;
}
