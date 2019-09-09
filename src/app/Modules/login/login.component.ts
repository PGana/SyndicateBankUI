import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  errorMsg: string;
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {

    this.login = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(form: FormGroup) {
    if (form.valid) {
      const user = form.get('username').value;
      const pwd = form.get('password').value;
      if (user.toLowerCase() !== 'admin') {
        this.errorMsg = 'User Email/ID is not valid';
        return;
      }
      if (pwd !== '1234') {
        this.errorMsg = 'Password is not correct';
        return;
      }
      this.router.navigate(['/home']);
    }
  }

}
