import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { Message } from 'primeng/api'
import { LayoutService } from 'src/app/layout/service/app.layout.service'
import { User } from 'src/app/models'
import { AuthService, LdapService, UserService } from 'src/app/services'
import { FullScreenService } from '../fullScreen.service'

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

      // .progress{
      //   position: fixed;
      //   top:0;
      //   left: 0;
      //   z-index: 1000;
      // }
    `,
  ],
})
export class LoginComponent implements OnInit {
  loading = false
  error = ''
  user: User

  loginForm: FormGroup
  isSubmitted = false
  messages: Message[] | undefined

  constructor(
    public layoutService: LayoutService,
    private router: Router,
    private ldapService: LdapService,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private fullScreenService: FullScreenService
  ) {}

  ngOnInit() {
    this.authService.clearToken()
    this.createForm()
  }

  createForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  get formControls() {
    return this.loginForm.controls
  }

  login() {
    const formData = this.loginForm.getRawValue()

    this.loading = true

    this.ldapService.login(formData).subscribe({
      next: (response) => {
        if (response.result) {
          this.user = {
            username: formData.username,
            name: response.result,
          }

          this.getDni(formData)
        } else {
          this.addMessage(response.message)
          this.loading = false
        }
      },
      error: (e) => {
        console.error(e)
        this.loading = false
      },
    })
  }

  getDni(formData) {
    this.userService.getCiBySir({ siglado: formData.username }).subscribe({
      next: (response) => {
        const aux: any = response.pop()
        if (aux) this.user.dni = aux.cedula
      },
      error: (e) => console.log(e),
      complete: () => {
        this.success()
        this.loading = false
      },
    })
  }

  success() {
    this.fullScreenService.setFullScreen(true)
    this.authService.setSessionStorage('userOPENSIPCA', this.user)
    this.router.navigate([''])
  }

  addMessage(message: string) {
    this.messages = [{ severity: 'warn', summary: message }]
  }
}
