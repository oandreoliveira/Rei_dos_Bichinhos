import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Usuario } from 'src/app/Interface/Usuario';
import { UsuarioService } from 'src/app/Service/usuario.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuario.html'
  ,
  styleUrls: ['./listar-usuario.css'
  ]
})
export class ListarUsuariosComponent implements OnInit {

  constructor(private UsuarioService: UsuarioService, private toastr: ToastrService) { }

  public "Usuarios": Usuario[];

  public paginaAtual = 1;
  onActivate(event: Event) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  public pesquisar(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.Usuarios = this.Usuarios.filter(
      Usuario => {
        return Usuario.email?.toLowerCase().includes(value.toLowerCase());
      });

    if (value == '') this.getUsuarios()
  }


  public getUsuarios() {
    this.UsuarioService.getUsuarios()
      .subscribe(
        Usuarios => {
          this.Usuarios = Usuarios
          console.log(Usuarios)
        },
        error => { console.log(error) }
      )

  }

  showSuccess() {
    this.toastr.success('', 'Excluído com Sucesso!');
  }
  showError() {
    this.toastr.error('', 'Houve um problema com a Exclusão!');
  }

  public delUsuarios(id: number) {
    this.UsuarioService.delUsuario(id).subscribe(
      () => {
        this.showSuccess();
        this.getUsuarios();
      });
  }

  ngOnInit(): void {
    this.getUsuarios();

  }


}
