import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';
import { ToasterService } from '../../services/toaster.service';

@Component({
  selector: 'signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  isLoading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private toaster: ToasterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initializeForm()
  }


  initializeForm() {
    this.signupForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cin: ['', [Validators.required,]],
      telephone: ['', [Validators.required]]
    })
  }


  handleSubmit() {
    if (this.signupForm.valid) {
      this.isLoading = true;
      this.authenticationService.signup(this.signupForm.value)
        .subscribe({
          next: ({ msg }) => {
            this.toaster.showToast(msg!, 'success', 5000)
            this.isLoading = false;
            setTimeout(() => {
              this.router.navigate(['/']);
            }, 5000);
          },
          error: error => {
            const errorMsg = error?.error?.msg || 'Une erreur est survenue';
            this.toaster.showToast(errorMsg, 'error', 5000)
            this.isLoading = false;
          }
        }
        )
    }
  }

}
