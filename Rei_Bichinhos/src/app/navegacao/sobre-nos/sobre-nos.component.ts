import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/Interface/Categoria';
import { CategoriasService } from 'src/app/Service/categorias.service';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.html',
  styleUrls: ['./sobre-nos.css'
  ]
})
export class SobreNosComponent implements OnInit {

  constructor(private categoriasService: CategoriasService,
    private router: Router, private ActivatedRoute: ActivatedRoute) { }

  public "categorias": Categoria[];
  public categoria: Categoria = {} as Categoria;

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

  getCategoriaId() {
    this.categoriasService.getCategoriaById(this.ActivatedRoute.snapshot.paramMap.get('id')).subscribe(
      categoria => {
        this.categoria = { ...categoria } as Categoria
        console.log(JSON.stringify(this.categoria))

      },
      erro => {
        console.log('Não foi possivel localizar a Categoria')
      }
    )
  }

  ngOnInit(): void {
    this.getCategorias();
    this.getCategoriaId();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

}
