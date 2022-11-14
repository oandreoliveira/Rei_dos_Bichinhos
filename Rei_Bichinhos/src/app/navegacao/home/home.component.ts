import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/Interface/Categoria';
import { Produto } from 'src/app/Interface/Produto';
import { CategoriasService } from 'src/app/Service/categorias.service';
import { ProdutosService } from 'src/app/Service/produtos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.css']
})

export class HomeComponent implements OnInit {

  public paginaAtual = 1;
  onActivate(event: Event) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  constructor(private produtosService: ProdutosService, private categoriasService: CategoriasService,
    private router: Router, private ActivatedRoute: ActivatedRoute) { }

  public "produtos": Produto[];
  public "categorias": Categoria[];
  public categoria: Categoria = {} as Categoria;


  public getProdutos() {
    this.produtosService.getProdutos()
      .subscribe(
        produto => {
          this.produtos = produto
          console.log(produto)
        },
        error => { console.log(error) }
      )

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

  public pesquisar(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.produtos = this.produtos.filter(
      produtos => {
        return produtos.nome?.toLowerCase().includes(value.toLowerCase());
      });

    if (value == '') this.getProdutos()
  }

  ngOnInit(): void {

    this.getProdutos();
    this.getCategorias();
    this.getCategoriaId();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

}


