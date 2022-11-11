import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Categoria } from 'src/app/Interface/Categoria';
import { Produto } from 'src/app/Interface/Produto';
import { CategoriasService } from 'src/app/Service/categorias.service';
import { ProdutosService } from 'src/app/Service/produtos.service';

@Component({
  selector: 'app-detalhar-produto',
  templateUrl: './detalhar-produto.html',
  styleUrls: ['./detalhar-produto.css'
  ]
})
export class DetalharProdutoComponent implements OnInit {

  constructor(private categoriaService: CategoriasService, private produtosService: ProdutosService, private ActivatedRoute: ActivatedRoute, private router: Router) { }

  public "produtos": Produto[];
  public "categorias": Categoria[];
  public categoria: Categoria = {} as Categoria;
  public produto: Produto = {} as Produto;



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

  ngOnInit(): void {
    this.getCategoriaId();
    this.getCategorias();
    this.getProdutos();
    this.getProdutoId();
  }
}
