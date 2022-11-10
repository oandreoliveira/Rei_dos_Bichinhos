import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/Interface/Categoria';
import { Produto } from 'src/app/Interface/Produto';
import { CategoriasService } from 'src/app/Service/categorias.service';
import { ProdutosService } from 'src/app/Service/produtos.service';

@Component({
  selector: 'app-listar-produtos-home',
  templateUrl: './listar-produtos-home.html',
  styleUrls: ['./listar-produtos-home.css'
  ]
})
export class ListarProdutosHomeComponent implements OnInit {

  constructor(private produtosService: ProdutosService, private categoriasService: CategoriasService) { }

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

  public pesquisar(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.produtos = this.produtos.filter(
      produto => {
        return produto.nome!.toLowerCase().includes(value.toLowerCase());
      });

    if (value == '') this.getProdutos()
  }


  public getProdutos() {
    this.produtosService.getProdutos()
      .subscribe(
        prod => {
          this.produtos = prod
          console.log(prod)
        },
        error => { console.log(error) }
      )
  }



  ngOnInit(): void {
    this.getProdutos();
    this.getCategorias();

  }



}