import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaAdministrativaComponent } from './navegacao/area-administrativa/area-administrativa.component';
import { HomeComponent } from './navegacao/home/home.component';
import { CriarProdutosComponent } from './Produtos/criar-produtos/criar-produtos.component';
import { EditarProdutosComponent } from './Produtos/editar-produtos/editar-produtos.component';
import { ListarProdutosComponent } from './Produtos/listar-produtos/listar-produtos.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'produtos', component: ListarProdutosComponent },
  { path: 'Area-Admnistrativa', component: AreaAdministrativaComponent },
  { path: 'Produtos', component: ListarProdutosComponent },
  { path: 'Criar-Produtos', component: CriarProdutosComponent },
  { path: 'Listar-Produtos', component: ListarProdutosComponent },
  { path: 'Editar-Produtos', component: EditarProdutosComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
