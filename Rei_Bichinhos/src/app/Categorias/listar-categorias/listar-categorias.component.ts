import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/Interface/Categoria';
import { CategoriasService } from 'src/app/Service/categorias.service';
import {
  trigger,
  transition,
  style,
  animate,
} from "@angular/animations";

@Component({
  selector: 'app-listar-categorias',
  templateUrl: './listar-categorias.html',
  styleUrls: ['./listar-categorias.css'],
  // animations: [

  //   trigger('slideIn', [
  //     transition('* => void', [
  //       animate(300),
  //       style({
  //         transform: 'translateX(100px)',
  //         opacity: 0
  //       })
  //     ])
  //   ])
  // ]

})


export class ListarCategoriasComponent implements OnInit {



  constructor(private categoriasService: CategoriasService, private toastr: ToastrService) { }

  public "categorias": Categoria[];

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

    this.categorias = this.categorias.filter(
      categoria => {
        return categoria.nome?.toLowerCase().includes(value.toLowerCase());
      });

    if (value == '') this.getCategorias()
  }


  public getCategorias() {
    this.categoriasService.getCategorias()
      .subscribe(
        categorias => {
          this.categorias = categorias
          console.log(categorias)
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

  public delCategorias(id: number) {
    this.categoriasService.delCategoria(id).subscribe(
      () => {
        this.showSuccess();
        this.getCategorias();
      });
  }

  ngOnInit(): void {
    this.getCategorias();

  }


}
