import {Component} from '@angular/core';
import {Service} from "../service";
import {Location} from '@angular/common';


@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.component.css'],
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent {
constructor(private _location: Location) {
    }
    backClicked() {
    if (localStorage.getItem("user") === null){
        this._location.back();
    }
    else{
        this._location.back();
        this._location.back();
    }
}
    }

