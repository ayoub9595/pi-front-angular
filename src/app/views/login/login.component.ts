import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Login} from '../../models/Login';
import {Router} from '@angular/router';
import {ToasterService} from '../../services/toaster.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router,
    private toaster: ToasterService
  ) { }

  ngOnInit() {
    this.initializeForm()
  }

  initializeForm() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mot_de_passe: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  handleSubmit() {
    const login: Login = this.loginForm.value;
    this.authenticationService.login(login)
      .subscribe( {
      next: ({access_token,refresh_token}) => {
        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);
        if(this.authenticationService.isAdmin()) {
          this.router.navigate(['/home/equipements']);
        }
        else {
          this.router.navigate(['/home/dashboard']);
        }

      },
      error: error => {
        const errorMsg = error?.error?.msg || 'Une erreur est survenue';
        this.toaster.showToast(errorMsg, 'error',5000)
      }
      }
    )
  }

}
