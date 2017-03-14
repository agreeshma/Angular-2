import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Service} from "../service";
import {User} from "../service";

@Component({
  selector: 'about',
  styleUrls: ['./about.component.css'],
  templateUrl: './about.component.html'
})
export class AboutComponent {

	public user = new User('','','');
    public errorMsg = '';
 
    constructor(
        private _service:Service) {}
 
    onSubmit(data:any) {

        if(!this._service.login(this.user)){
            this.errorMsg = 'Failed to login';
        }
    }

		
}

 