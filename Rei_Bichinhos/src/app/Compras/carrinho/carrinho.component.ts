import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/Interface/Produto';
import { ProdutosService } from 'src/app/Service/produtos.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.html',
  styleUrls: ['./carrinho.css'
  ]
})
export class CarrinhoComponent implements OnInit {

  constructor(private produtosService: ProdutosService, private ActivatedRoute: ActivatedRoute) { }
  public "produtos": Produto[];
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
    // this.getProdutos();
    this.getProdutoId();
  }

}
