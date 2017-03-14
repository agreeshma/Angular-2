import {Component} from '@angular/core';
import {Service} from "./service";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',

  styleUrls: ['./app.component.css']
})
export class AppComponent {
	 public errorMsg = '';
	constructor(
        private _service:Service) {}
 
 dashboardcheck(){
  this._service.dashboardfunc();

 }
    logout() {

        if(!this._service.logoutpage()){
            this.errorMsg = 'No user logged in';
        }
    }
}
