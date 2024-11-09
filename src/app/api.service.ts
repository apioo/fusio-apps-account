import {Injectable} from '@angular/core';
import {CredentialsInterface} from "sdkgen-client";
import {Client} from "fusio-sdk";
import {ApiService as SDK} from "ngx-fusio-sdk";

@Injectable({
  providedIn: 'root'
})
export class ApiService extends SDK<Client> {

  protected newClient(baseUrl: string, credentials: CredentialsInterface | null | undefined): Client {
    return new Client(baseUrl, credentials);
  }

}
