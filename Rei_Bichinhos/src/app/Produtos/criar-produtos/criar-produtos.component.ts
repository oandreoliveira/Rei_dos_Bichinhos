import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/Interface/Categoria';
import { Produto } from 'src/app/Interface/Produto';
import { CategoriasService } from 'src/app/Service/categorias.service';
import { ProdutosService } from 'src/app/Service/produtos.service';

@Component({
  selector: 'app-criar-produtos',
  templateUrl: './criar-produtos.html',
  styleUrls: ['./criar-produtos.css'
  ]
})
export class CriarProdutosComponent implements OnInit {

  constructor(private produtosService: ProdutosService, private router: Router, private fb: FormBuilder, private categoriasService: CategoriasService, private toastr: ToastrService) { }
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
  criarProdForm = this.fb.group({

    nome: ['', Validators.required],
    quantidade: [new FormControl(), Validators.required],
    descricao: ['', Validators.required],
    valor: [new FormControl(), Validators.required],
    promocao: [false, Validators.required],
    valorPromo: [new FormControl(), Validators.required],
    imagem: ['', Validators.required],
    isAtivo: [true, Validators.required],
    alturaCm: [new FormControl(), Validators.required],
    larguraCm: [new FormControl(), Validators.required],
    pesoGr: [new FormControl(), Validators.required],
    id_categoria: [new FormControl(), Validators.required]


  });

  public promocaoIsTrue(): boolean {

    return this.criarProdForm.controls.promocao.value == true;

  }
  public promocaoIsFalse(): boolean {

    return this.criarProdForm.controls.promocao.value == false;

  }

  showSuccess() {
    this.toastr.success('', 'Cadastro realizado com Sucesso!');
  }
  showError() {
    this.toastr.error('', 'Houve um problema com o Cadastro!');
  }


  public Produto: Produto = {} as Produto;
  public "produtos": Produto[];
  criarProduto() {
    if (this.criarProdForm.invalid) {
      return
    }
    this.Produto = { ... this.criarProdForm.value } as Produto;
    this.produtosService.postProduto(this.Produto).subscribe(
      () => {
        this.showSuccess();
        this.router.navigate(['/Produtos']);
      },
      erro => {
        this.showError();
        console.log('Erro ao cadastrar')
      }
    )
    console.log(this.Produto)
  }


  ngOnInit(): void {
    this.getCategorias();
  }

  onActivate(event: Event) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  public get nome() {
    return this.criarProdForm.get('nome')!;
  }
  public get quantidade() {
    return this.criarProdForm.get('quantidade')!;
  }
  public get descricao() {
    return this.criarProdForm.get('descricao')!;
  }
  public get valor() {
    return this.criarProdForm.get('valor')!;
  }
  public get promocao() {
    return this.criarProdForm.get('promocao')!;
  }
  public get valorPromo() {
    return this.criarProdForm.get('valorPromo')!;
  }
  public get imagem() {
    return this.criarProdForm.get('imagem')!;
  }
  public get alturaCm() {
    return this.criarProdForm.get('alturaCm')!;
  }
  public get larguraCm() {
    return this.criarProdForm.get('larguraCm')!;
  }
  public get pesoGr() {
    return this.criarProdForm.get('pesoGr')!;
  }
  public get id_categoria() {
    return this.criarProdForm.get('id_categoria')!;
  }

}



