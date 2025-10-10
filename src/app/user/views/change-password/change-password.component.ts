import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToasterService} from '../../../services/toaster.service';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-change-password',
  standalone: false,
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent implements OnInit {
  changePasswordForm!: FormGroup;
  showOldPassword = false;
  showNewPassword = false;
  showConfirmPassword = false;

  constructor(
    private formBuilder: FormBuilder,
    private toaster: ToasterService,
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {
  }

  ngOnInit() {
    this.initializeForm()
  }


  initializeForm() {
    this.changePasswordForm = this.formBuilder.group({
      ancien_mot_de_passe: ['', [Validators.required]],
      nouveau_mot_de_passe: ['', [Validators.required]],
      confirmer_mot_de_passe: ['', [Validators.required]],
    })
  }

  handleSubmit() {
    const { ancien_mot_de_passe,nouveau_mot_de_passe,confirmer_mot_de_passe } = this.changePasswordForm.value;
    if(nouveau_mot_de_passe !== confirmer_mot_de_passe) {
      this.toaster.showToast("Les mots de passes ne sont pas identiques","error")
      return
    }
    this.authenticationService.changePassword({ancien_mot_de_passe,nouveau_mot_de_passe}).subscribe({
      next: () => {
        this.toaster.showToast('Mot de passe modifié avec succès','success')
        this.router.navigate(['/home/affectations'])
        },
      error: error => {
        const errorMsg = error?.error?.msg || 'Une erreur est survenue';
        this.toaster.showToast(errorMsg, 'error',5000)
      }
    })

  }

}
