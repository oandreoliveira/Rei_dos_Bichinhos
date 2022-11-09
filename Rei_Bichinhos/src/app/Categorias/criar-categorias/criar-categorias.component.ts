import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/Interface/Categoria';
import { CategoriasService } from 'src/app/Service/categorias.service';


@Component({
  selector: 'app-criar-categorias',
  templateUrl: './criar-categorias.html',
  styleUrls: ['./criar-categorias.css'
  ]
})
export class CriarCategoriasComponent implements OnInit {

  constructor(private categoriaService: CategoriasService, private router: Router, private fb: FormBuilder, private toastr: ToastrService) { }

  criarProdForm = this.fb.group({

    nome: ['', Validators.required]


  });

  showSuccess() {
    this.toastr.success('', 'Cadastro realizado com Sucesso!');
  }
  showError() {
    this.toastr.error('', 'Houve um problema com o Cadastro!');
  }

  public Categoria: Categoria = {} as Categoria;

  addCategoria() {
    if (this.criarProdForm.invalid) {
      return
    }
    this.Categoria = { ... this.criarProdForm.value } as Categoria;
    this.categoriaService.postCategoria(this.Categoria).subscribe(
      () => {
        this.showSuccess();
        this.router.navigate(['/Categorias']);
      },
      erro => {
        this.showError()
        console.log('Erro ao cadastrar')
      }
    )
    console.log(this.Categoria)
  }

  ngOnInit(): void {

  }

  public get nome() {
    return this.criarProdForm.get('nome')!;
  }



}

