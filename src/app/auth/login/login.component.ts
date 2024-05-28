import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { User } from 'src/app/models';
import { AuthService, LdapService, UserService } from 'src/app/services';
import { FullScreenService } from '../fullScreen.service';







@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
      :host ::ng-deep .pi-eye,
      :host ::ng-deep .pi-eye-slash {
        transform: scale(1.6);
        margin-right: 1rem;
        color: var(--primary-color) !important;
      }
    `,
  ],
})
export class LoginComponent implements OnInit {
  loading = false;
  error = '';
  user: User;

  loginForm: FormGroup;
  isSubmitted = false;
  messages: Message[] | undefined;

  constructor(
    public layoutService: LayoutService,
    private router: Router,
    private ldapService: LdapService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private fullScreenService: FullScreenService,
  ) {}

  ngOnInit() {
    this.authService.clearToken();
    this.createForm();
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get formControls() {
    return this.loginForm.controls;
  }

  login() {   
    const formData = this.loginForm.getRawValue();

    this.ldapService.login(formData).subscribe({
      next: (response) => {
        if (response.result) {
          this.user = {
            username: formData.username,
            name: response.result,
          };

          this.getDni(formData);
        } else {
          this.addMessage(response.message);
        }
      },
      error: (e) => console.error(e),
    });
  }

  getDni(formData) {
    this.userService.getCiBySir({ siglado: formData.username }).subscribe({
      next: (response) => {
        let aux: any = response.pop();
        if (aux) this.user.dni = aux.cedula;
      },
      error: (e) => console.log(e),
      complete: () => this.success(),
    });
  }

  success() {
    this.fullScreenService.setFullScreen(true);
    this.authService.setSessionStorage('userOPENSIPCA', this.user);
    this.router.navigate(['']);
  }

  addMessage(message: string){
    this.messages = [
      { severity: 'warn', summary: message }
   ];
  }
}
