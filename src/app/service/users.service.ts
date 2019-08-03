import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  isLoggedIn = false;

  constructor(private router: Router) { }

  login(username: string, password: string) {
    if (username === 'user' && password === 'user') {
      this.isLoggedIn = true;
      this.router.navigate(['admin']);
    }
    else {
      alert("You do not have permission.");
    }
  }
  logout() {
    this.isLoggedIn = false;
    this.router.navigate(['']);
  }

}
