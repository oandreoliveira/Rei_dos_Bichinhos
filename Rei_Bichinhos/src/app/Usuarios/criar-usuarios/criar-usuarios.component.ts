import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/Interface/Usuario';
import { UsuarioService } from 'src/app/Service/usuario.service';

@Component({
  selector: 'app-criar-usuarios',
  templateUrl: './criar-usuario.html',
  styleUrls: ['./criar-usuario.css'
  ]
})
export class CriarUsuariosComponent implements OnInit {

  constructor(private UsuarioService: UsuarioService, private router: Router, private fb: FormBuilder, private toastr: ToastrService) { }

  criarUserForm = this.fb.group({

    email: ['', Validators.required],
    isAtivo: [true, Validators.required],
    senha: ['', Validators.required]


  });

  showSuccess() {
    this.toastr.success('', 'Cadastro realizado com Sucesso!');
  }
  showError() {
    this.toastr.error('', 'Houve um problema com o Cadastro!');
  }

  public Usuario: Usuario = {} as Usuario;

  addUsuario() {
    if (this.criarUserForm.invalid) {
      return
    }
    this.Usuario = { ... this.criarUserForm.value } as Usuario;
    this.UsuarioService.postUsuario(this.Usuario).subscribe(
      () => {
        this.showSuccess();
        this.router.navigate(['/Usuarios']);
      },
      erro => {
        this.showError()
        console.log('Erro ao cadastrar')
      }
    )
    console.log(this.Usuario)
  }

  ngOnInit(): void {

  }

  public get email() {
    return this.criarUserForm.get('email')!;
  }
  public get senha() {
    return this.criarUserForm.get('senha')!;
  }



}
