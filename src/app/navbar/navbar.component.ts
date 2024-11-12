import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent implements OnInit {

constructor(public auth:AuthService){}

  ngOnInit(): void {

    
  }

  isSildebarOpen = false;

  toggleSidebar(){
    this.isSildebarOpen=!this.isSildebarOpen;
  }

  logout(){
     //remove token
     this.auth.removeToken();
     this.auth.canAccess();
  }


}
