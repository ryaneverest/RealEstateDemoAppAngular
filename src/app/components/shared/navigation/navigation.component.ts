import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
// import { UsersService } from './service/users.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  isLoggedIn: boolean;

  constructor(public usersService: UsersService) {
   }

  ngOnInit() {
  }
  logout() {
    this.usersService.logout();
  }
}
