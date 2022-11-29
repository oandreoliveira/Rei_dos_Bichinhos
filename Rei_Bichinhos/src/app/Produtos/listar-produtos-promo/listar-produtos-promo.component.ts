import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/Interface/Categoria';
import { Produto } from 'src/app/Interface/Produto';
import { CategoriasService } from 'src/app/Service/categorias.service';
import { ProdutosService } from 'src/app/Service/produtos.service';

@Component({
  selector: 'app-listar-produtos-promo',
  templateUrl: './listar-produtos-promo.component.html',
  styleUrls: ['./listar-produtos-promo.component.css'
  ]
})
export class ListarProdutosPromoComponent implements OnInit {

  constructor(private produtosService: ProdutosService, private categoriasService: CategoriasService,
    private router: Router, private ActivatedRoute: ActivatedRoute) { }

  public paginaAtual = 1;
  onActivate(event: Event) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }



  public "produtos": Produto[];
  public "categorias": Categoria[];
  public categoria: Categoria = {} as Categoria;
  public produto: Produto = {} as Produto;


  public ProdutosPromo() {
    return this.produtos.filter(prom => prom.promocao == true)
  }



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

  getProdutoId() {
    this.produtosService.getProdutoById(this.ActivatedRoute.snapshot.paramMap.get('id')).subscribe(
      produto => {
        this.produto = { ...produto } as Produto
        console.log(JSON.stringify(this.produto))
      },
      erro => {

        console.log('Não foi possivel localizar o Produto')
      }
    )
  }

  public pesquisar(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.produtos = this.produtos.filter(
      produto => {
        return produto.nome!.toLowerCase().includes(value.toLowerCase());
      });

    if (value == '') this.getProdutos()
  }


  ngOnInit(): void {
    this.getProdutos();
    this.getCategorias();
    this.getCategoriaId();
    this.getProdutoId();

  }

}
