import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/Interface/Usuario';
import { UsuarioService } from 'src/app/Service/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent implements OnInit {

  constructor(private usuarioService: UsuarioService, private router: Router, private fb: FormBuilder, private toastr: ToastrService) { }

  postUser = this.fb.group({

    email: ['', Validators.required],
    senha: ['', Validators.required],

  });

  public Usuario: Usuario = {} as Usuario;

  showSuccess() {
    this.toastr.success('', 'Você está logado!');
  }
  showError() {
    this.toastr.error('', 'Houve um problema com o seu login!');
  }



  public get email() {
    return this.postUser.get('email')!;
  }
  public get senha() {
    return this.postUser.get('senha')!;
  }


  ngOnInit(): void {
  }
}
