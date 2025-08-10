import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {ToasterService} from '../../services/toaster.service';

@Component({
  selector: 'signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

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
    this.signupForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cin: ['', [Validators.required,]],
      telephone: ['', [Validators.required]],
      mot_de_passe: ['', [Validators.required, Validators.minLength(6)]],
      confirm_mot_de_passe: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  validateForm() {
    if (this.signupForm.value.mot_de_passe !== this.signupForm.value.confirm_mot_de_passe) {
      this.toaster.showToast('Les mots de passees ne sont pas identiques','error')
      return false;
    }
    return true;
  }

  handleSubmit() {
    if (this.signupForm.valid && this.validateForm()) {
      this.authenticationService.signup(this.signupForm.value)
        .subscribe( {
            next: ({access_token,refresh_token}) => {
              localStorage.setItem('access_token', access_token);
              localStorage.setItem('refresh_token', refresh_token);
              if(this.authenticationService.isAdmin()) {
                this.router.navigate(['/home/equipements']);
              }
              else {
                this.router.navigate(['/home/affectations']);
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

}
