import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
 
export class User {
  constructor(
    public username: string,
    public email: string,
    public password: string) { }
}
 
var users = [
  new User('admin','admin@admin.com','admin'),
  new User('user1','user1@gmail.com','user1')
];
 
@Injectable()
export class Service {
 
  constructor(
    private _router: Router){}
 
dashboardfunc()
{
if (localStorage.getItem("user") === null){
this._router.navigate(['/about']);
}
else
this._router.navigate(['/dashboard']);

}

  logoutpage() {
if (localStorage.getItem("user") === null){
return false;
}
else{    
  localStorage.removeItem("user");
    this._router.navigate(['/home']);
    return true;
  }
}

  login(user){
   
    var authentication = users.find(u => u.username === user.username);
console.log(authentication);
    if (authentication && authentication.email === user.email && authentication.password === user.password){

      localStorage.setItem("user", JSON.stringify(authentication));

      this._router.navigate(['/dashboard']);
      return true;
    }
    return false;
 
  }
 
    checkCredentials(){
      console.log("called-service.ts");
     if (localStorage.getItem("user") === null){
         this._router.navigate(['/about']);
     }
   } 
}