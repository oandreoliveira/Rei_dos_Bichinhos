import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarCategoriasComponent } from './Categorias/criar-categorias/criar-categorias.component';
import { EditarCategoriasComponent } from './Categorias/editar-categorias/editar-categorias.component';
import { ListarCategoriasComponent } from './Categorias/listar-categorias/listar-categorias.component';
import { AreaAdministrativaComponent } from './navegacao/area-administrativa/area-administrativa.component';
import { HomeComponent } from './navegacao/home/home.component';
import { CriarProdutosComponent } from './Produtos/criar-produtos/criar-produtos.component';
import { EditarProdutosComponent } from './Produtos/editar-produtos/editar-produtos.component';
import { ListarProdutosComponent } from './Produtos/listar-produtos/listar-produtos.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Area-Admnistrativa', component: AreaAdministrativaComponent },
  { path: 'Produtos', component: ListarProdutosComponent },
  { path: 'Criar-Produtos', component: CriarProdutosComponent },
  { path: 'Editar-Produtos/:id', component: EditarProdutosComponent },
  { path: 'Categorias', component: ListarCategoriasComponent },
  { path: 'Editar-Categorias/:id', component: EditarCategoriasComponent },
  { path: 'Criar-Categorias', component: CriarCategoriasComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
