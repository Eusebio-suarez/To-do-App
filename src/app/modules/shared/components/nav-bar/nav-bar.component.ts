import { Component } from '@angular/core';
import { LogoutService } from '../../services/logout.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

  constructor(private logoutService:LogoutService){

  }

  logout(){
    this.logoutService.logout()
  }
}
