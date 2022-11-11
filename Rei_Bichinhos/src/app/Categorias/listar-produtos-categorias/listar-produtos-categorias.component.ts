import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/Interface/Categoria';
import { Produto } from 'src/app/Interface/Produto';
import { CategoriasService } from 'src/app/Service/categorias.service';
import { ProdutosService } from 'src/app/Service/produtos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listar-produtos-categorias',
  templateUrl: './listar-produtos-categorias.html',
  styleUrls: ['./listar-produtos-categorias.css'
  ]
})
export class ListarProdutosCategoriasComponent implements OnInit {

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

    this.categoria.produtos = this.categoria.produtos!.filter(
      produtos => {
        return produtos.nome?.toLowerCase().includes(value.toLowerCase());
      });

    if (value == '') this.getProdutos()
  }


  constructor(private categoriaService: CategoriasService, private produtosService: ProdutosService, private ActivatedRoute: ActivatedRoute, private router: Router) { }

  public "produtos": Produto[];
  public "categorias": Categoria[];
  public categoria: Categoria = {} as Categoria;
  // public produto: Produto = {} as Produto;



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
    this.categoriaService.getCategorias()
      .subscribe(
        categorias => {
          this.categorias = categorias
          console.log(categorias)
        },
        error => { console.log(error) }
      )

  }


  getCategoriaId() {
    this.categoriaService.getCategoriaById(this.ActivatedRoute.snapshot.paramMap.get('id')).subscribe(
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
    this.getCategoriaId();
    this.getCategorias();
    this.getProdutos();
    this.router.routeReuseStrategy.shouldReuseRoute = () => false; // refresh em rotas da mesma página
  }

}
