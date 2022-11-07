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

  public pesquisar(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    this.produtos = this.produtos.filter(
      produtos => {
        return produtos.nome?.toLowerCase().includes(value.toLowerCase());
      });

    if (value == '') this.getProdutos()
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
  public delProdutos(id: number) {
    this.produtosService.delProduto(id).subscribe(
      () => {

        this.getProdutos();
      }
    );
  }

  ngOnInit(): void {

    this.getProdutos();
  }

}
