import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authSvc: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.form.controls;
  }

  getErrorMessageEmail(): string {
    const username = this.f['username'];
    if(username.hasError('required')) return 'Este campo es requerido.';
    return '';
  }

  getErrorMessagePassword(): string {
    const password = this.f['password'];
    if(password.hasError('required')) return 'Este campo es requerido.';
    if(password.hasError('pattern')) return 'La contraseña no tiene un formato válido.';
    return '';
  }

  onSubmit() {
    this.authSvc.login(this.form.value).subscribe({
      next: (res: any)=> {
        localStorage.setItem('token', res.access);
        this.router.navigateByUrl('/panel-principal');
      },
      error: (err) => console.log(err)
    });
  }
}
