import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/Interface/Categoria';
import { Produto } from 'src/app/Interface/Produto';
import { ProdutosService } from 'src/app/Service/produtos.service';

@Component({
  selector: 'app-listar-produtos',
  templateUrl: './listar-produtos.html',
  styleUrls: ['./listar-produtos.css'
  ]
})
export class ListarProdutosComponent implements OnInit {

  public paginaAtual = 1;
  onActivate(event: Event) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
  constructor(private produtosService: ProdutosService) { }
  public "produtos": Produto[];
  public "categorias": Categoria[]; // ver se é preciso *******

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

  ngOnInit(): void {

    this.getProdutos();
  }

}
