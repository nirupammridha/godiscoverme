import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../shared/auth.service';
import { FormBuilder, FormGroup } from "@angular/forms";
import { TokenService } from './../shared/token.service';
import { AuthStateService } from './../shared/auth-state.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  loginForm: FormGroup;
  errors = null;

  constructor(
    public router: Router,
    public fb: FormBuilder,
    public authService: AuthService,
    private token: TokenService,
    private authState: AuthStateService,
  ) {
    this.loginForm = this.fb.group({
      email: [],
      password: []
    })
  }

  ngOnInit() {
  }

  onSubmit() {
      this.authService.signin(this.loginForm.value).subscribe(
        result => {
          this.responseHandler(result);
        },
        error => {
          this.errors = error.error;
        },() => {
          this.authState.setAuthState(true);
          this.loginForm.reset()
          this.router.navigate(['/']);
        }
      );
  }

  // Handle response
  responseHandler(data: any){
    this.token.handleData(data.access_token);
  }

}