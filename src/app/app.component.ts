import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ANGULAR 7';
  islogin : string;

  constructor(private router : Router){
    //sessionStorage.removeItem('islogin');
    sessionStorage.setItem('islogin','true');

    if(sessionStorage.getItem('islogin') == null || sessionStorage.getItem('islogin') == 'false'){ 
      sessionStorage.setItem('islogin','false');
      this.islogin = sessionStorage.getItem('islogin');
      this.router.navigateByUrl("/login");
    }else{
      sessionStorage.setItem('islogin','true');
      this.islogin = sessionStorage.getItem('islogin');           
    }
  }

}
