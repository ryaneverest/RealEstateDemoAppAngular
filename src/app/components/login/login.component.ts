import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup;
  constructor(private fb: FormBuilder, private usersService: UsersService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: '',
      password: ''
    });
  }

  submitLogin() {
    const formvalue = this.loginForm.value;
    if (this.loginForm.valid) {
      this.usersService.login(formvalue.username, formvalue.password );
    }
  }

}
