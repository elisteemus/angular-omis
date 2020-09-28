import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, AuthResponseData } from '../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isSignUp = false;
  isLoading = false;
  error: string = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.autoLogin();
  }

  onButtonClick() {
    this.isSignUp = !this.isSignUp;
  }

  onLogin(loginForm: NgForm) {
    if (!loginForm.valid) {
      return;
    }
    this.isLoading = true;
    let authObs: Observable<AuthResponseData>;
    authObs = this.authService.login(loginForm.value.username, loginForm.value.password);
    authObs.subscribe(
      resData => {
        this.isLoading = false;
        this.router.navigate(["/item/all"], { relativeTo: this.route });
      },
      errorMessage => {
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    loginForm.reset();
  }

  onSignUp(signupForm: NgForm) {
    if (!signupForm.valid) {
      return;
    }
    this.isLoading = true;
    let authObs: Observable<AuthResponseData>;
    authObs = this.authService.signUp(signupForm.value.username, signupForm.value.password);
    authObs.subscribe(resData => {
        this.isLoading = false;
    }, error => {
      this.error = error;
      this.isLoading = false;
    });
    signupForm.reset();
  }

}
