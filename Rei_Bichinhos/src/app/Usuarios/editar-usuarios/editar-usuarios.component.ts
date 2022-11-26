import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/Interface/Usuario';
import { UsuarioService } from 'src/app/Service/usuario.service';

@Component({
  selector: 'app-editar-usuarios',
  templateUrl: './editar-usuarios.html',
  styleUrls: ['./editar-usuarios.css'
  ]
})
export class EditarUsuariosComponent implements OnInit {

  constructor(private UsuarioService: UsuarioService, private router: Router,
    private fb: FormBuilder, private ActivatedRoute: ActivatedRoute, private toastr: ToastrService) { }

  public Usuario: Usuario = {} as Usuario;

  editarUserForm = this.fb.group({
    id: [0, Validators.required],
    email: ['', Validators.required],
    senha: ['', Validators.required],
    // isAtivo: [true, Validators.required]
  });

  getUsuarioId() {
    this.UsuarioService.getUsuarioById(this.ActivatedRoute.snapshot.paramMap.get('id')).subscribe(
      Usuario => {
        this.Usuario = { ...Usuario } as Usuario
        this.editarUserForm.patchValue(this.Usuario)
        console.log(JSON.stringify(this.Usuario))

      },
      erro => {
        console.log('Não foi possivel localizar a Usuario')
      }
    )
  }

  showSuccess() {
    this.toastr.success('', 'Atualização realizada com Sucesso!');
  }
  showError() {
    this.toastr.error('', 'Houve um problema com a atualização!');
  }


  editaUsuario() {
    if (this.editarUserForm.invalid) {
      return
    }

    this.Usuario = { ... this.editarUserForm.value } as Usuario

    this.UsuarioService.putUsuario(this.Usuario.id, this.Usuario).subscribe(
      Usuario => {
        this.showSuccess();
        this.router.navigate(['/Usuarios'])
      },
      erro => {
        this.showError();
        console.log('Erro')
      })

  }

  ngOnInit(): void {
    this.getUsuarioId();
  }

  public get email() {
    return this.editarUserForm.get('email')!;
  }
  public get senha() {
    return this.editarUserForm.get('senha')!;
  }
}


