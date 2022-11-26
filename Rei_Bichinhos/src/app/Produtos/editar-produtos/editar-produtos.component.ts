import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/Interface/Categoria';
import { Produto } from 'src/app/Interface/Produto';
import { CategoriasService } from 'src/app/Service/categorias.service';
import { ProdutosService } from 'src/app/Service/produtos.service';

@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.html',
  styleUrls: ['./editar-produtos.css'
  ]
})
export class EditarProdutosComponent implements OnInit {

  constructor(private produtosService: ProdutosService, private router: Router,
    private fb: FormBuilder, private ActivatedRoute: ActivatedRoute, private categoriasService: CategoriasService, private toastr: ToastrService) { }

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
  public promocaoIsTrue(): boolean {

    return this.editarProdForm.controls.promocao.value == true;

  }
  showSuccess() {
    this.toastr.success('', 'Atualização realizada com Sucesso!');
  }
  showError() {
    this.toastr.error('', 'Houve um problema com a atualização!');
  }


  editarProdForm = this.fb.group({
    id: [0, Validators.required],
    nome: ['', Validators.required],
    quantidade: [0, Validators.required],
    codigo: ['', Validators.required],
    modelo: ['', Validators.required],
    descricao: ['', Validators.required],
    valor: [0, Validators.required],
    promocao: [false, Validators.required],
    valorPromo: [0, Validators.required],
    imagem: ['', Validators.required],
    isAtivo: [true, Validators.required],
    alturaCm: [0, Validators.required],
    larguraCm: [0, Validators.required],
    pesoGr: [0, Validators.required],
    id_categoria: [0, Validators.required]

  });

  public produto: Produto = {} as Produto;

  getProdutoId() {
    this.produtosService.getProdutoById(this.ActivatedRoute.snapshot.paramMap.get('id')).subscribe(
      produto => {

        this.produto = { ...produto } as Produto
        this.editarProdForm.patchValue(this.produto)
        console.log(JSON.stringify(this.produto))
      },
      erro => {

        console.log('Não foi possivel localizar o Produto')
      }
    )
  }

  editarProduto() {
    if (this.editarProdForm.invalid) {
      return
    }

    // this.produto = {} as Produto
    this.produto = { ... this.editarProdForm.value } as Produto

    this.produtosService.putProduto(this.produto.id, this.produto).subscribe(
      produto => {
        this.showSuccess();
        this.router.navigate(['/Produtos'])
      },
      err => {
        this.showError();
        console.log('Erro')
      })

  }

  ngOnInit(): void {
    this.getCategorias();
    this.getProdutoId();
  }

  onActivate(event: Event) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  public get nome() {
    return this.editarProdForm.get('nome')!;
  }
  public get quantidade() {
    return this.editarProdForm.get('quantidade')!;
  }
  public get descricao() {
    return this.editarProdForm.get('descricao')!;
  }
  public get valor() {
    return this.editarProdForm.get('valor')!;
  }
  public get promocao() {
    return this.editarProdForm.get('promocao')!;
  }
  public get valorPromo() {
    return this.editarProdForm.get('valorPromo')!;
  }
  public get imagem() {
    return this.editarProdForm.get('imagem')!;
  }
  public get alturaCm() {
    return this.editarProdForm.get('alturaCm')!;
  }
  public get larguraCm() {
    return this.editarProdForm.get('larguraCm')!;
  }
  public get pesoGr() {
    return this.editarProdForm.get('pesoGr')!;
  }
  public get id_categoria() {
    return this.editarProdForm.get('id_categoria')!;
  }
  public get codigo() {
    return this.editarProdForm.get('codigo')!;
  }
  public get modelo() {
    return this.editarProdForm.get('modelo')!;
  }


}
