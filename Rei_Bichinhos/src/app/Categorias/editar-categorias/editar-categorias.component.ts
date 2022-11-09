import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Categoria } from 'src/app/Interface/Categoria';
import { CategoriasService } from 'src/app/Service/categorias.service';

@Component({
  selector: 'app-editar-categorias',
  templateUrl: './editar-categorias.html',
  styleUrls: ['./editar-categorias.css'
  ]
})
export class EditarCategoriasComponent implements OnInit {


  constructor(private categoriaService: CategoriasService, private router: Router,
    private fb: FormBuilder, private ActivatedRoute: ActivatedRoute, private toastr: ToastrService) { }

  public categoria: Categoria = {} as Categoria;

  criarProdForm = this.fb.group({
    id: [0, Validators.required],
    nome: ['', Validators.required],
    // isAtivo: [true, Validators.required]
  });

  getCategoriaId() {
    this.categoriaService.getCategoriaById(this.ActivatedRoute.snapshot.paramMap.get('id')).subscribe(
      categoria => {
        this.categoria = { ...categoria } as Categoria
        this.criarProdForm.patchValue(this.categoria)
        console.log(JSON.stringify(this.categoria))

      },
      erro => {
        console.log('Não foi possivel localizar a Categoria')
      }
    )
  }

  showSuccess() {
    this.toastr.success('', 'Atualização realizada com Sucesso!');
  }
  showError() {
    this.toastr.error('', 'Houve um problema com a atualização!');
  }


  editaCategoria() {
    if (this.criarProdForm.invalid) {
      return
    }

    this.categoria = { ... this.criarProdForm.value } as Categoria

    this.categoriaService.putCategoria(this.categoria.id, this.categoria).subscribe(
      categoria => {
        this.showSuccess();
        this.router.navigate(['/Categorias'])
      },
      erro => {
        this.showError();
        console.log('Erro')
      })

  }

  ngOnInit(): void {
    this.getCategoriaId();
  }

  public get nome() {
    return this.criarProdForm.get('nome')!; //exclamação pq o valor pode não existir
  }
}
