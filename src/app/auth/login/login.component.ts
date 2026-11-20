import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formlogin!: FormGroup;
  email = "Danielsevilla8888@gmail.com";
  pass = "danielsevilla";

  isLogin: boolean = true;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formInit();
  }

  // Metodo para inicializar el form
  public formInit() {
    this.formlogin = this.fb.group({
      email: [''],
      pass: ['']
    });
  }

  // Metodo para iniciar sesion
  iniciarSesion() {
    const data = this.formlogin.value;
    if (data.email != this.email && data.pass != this.pass) {
      this.isLogin = false;
      setTimeout(() => {
        this.isLogin = true;
      }, 2000);
    } else {
      sessionStorage.setItem('login', "true");
      setTimeout(() => {
        this.router.navigate(['/pages/dashboard']);
      }, 2000);
    }
  }

  // Metodo para ir a registro
  irARegistro() {
    this.router.navigate(['/auth/register']);
  }
}