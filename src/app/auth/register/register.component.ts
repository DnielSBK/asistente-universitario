import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public formregister!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formInit();
  }

  // Metodo para inicializar el form
  public formInit() {
    this.formregister = this.fb.group({
      email: [''],
      pass: [''],
      confirmPass: ['']
    });
  }

  // Metodo para registrar usuario
  registrarUsuario() {
    const data = this.formregister.value;
    console.log(data);
  }

  // Metodo para volver a iniciar sesion
  irALogin() {
    this.router.navigate(['/auth/login']);
  }
}