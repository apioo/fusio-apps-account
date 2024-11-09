import {Component} from '@angular/core';
import {BackendUser} from "fusio-sdk";
import {UserService} from "ngx-fusio-sdk";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fusio-sdk';
  user?: BackendUser;

  constructor(private userMeta: UserService) { }

  ngOnInit(): void {
    this.user = this.userMeta.get();
  }

}
