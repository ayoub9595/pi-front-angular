import { Component } from '@angular/core';
import {Utilsateur} from '../../../affectations/models/Affectation';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../services/user.service';
import {AuthenticationService} from '../../../services/authentication.service';
import {ToasterService} from '../../../services/toaster.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  userForm: FormGroup;
  user: Utilsateur| null = null;
  showModify: boolean = false;
  loading = false;

  constructor(
              private fb: FormBuilder,
              private userService: UserService,
              private authenticationService: AuthenticationService,
              private toast: ToasterService
              ) {
    this.userForm = this.fb.group({
      nom: ['', Validators.required],
      cin: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userService.getUser(this.authenticationService.getCurrentUserId()!).subscribe(
      {
        next: user => {
          this.user = user
        this.populateForm()
    },
    error: () => {
      this.toast.showToast("Une erreur est survenue lors du chargement de données","error")
    }
    })

  }

  populateForm(): void {
    if (this.user) {
      this.userForm.patchValue({
        nom: this.user.nom,
        cin: this.user.cin,
        email: this.user.email,
        telephone: this.user.telephone
      });
    }
  }

  handleSubmit(): void {
    if (this.userForm.valid) {
      const updatedUser = {id:this.authenticationService.getCurrentUserId(),...this.userForm.value};
      this.loading = true;
      this.userService.updateUser(updatedUser).subscribe({
        next: user => {
          this.user = user;
          this.toast.showToast('Vos données ont été modifié avec succès','success');
          this.showModify = false;
          this.loading = false;
        },
        error: error => {
          const errorMessage = error.error.message || error.error.msg || 'Une erreur est survenue';
          this.toast.showToast(errorMessage,'error')
          this.loading = false;
        }
      })
    }
  }
}
