import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarCategoriasComponent } from './Categorias/criar-categorias/criar-categorias.component';
import { EditarCategoriasComponent } from './Categorias/editar-categorias/editar-categorias.component';
import { ListarCategoriasComponent } from './Categorias/listar-categorias/listar-categorias.component';
import { ListarProdutosCategoriasComponent } from './Categorias/listar-produtos-categorias/listar-produtos-categorias.component';
import { CarrinhoComponent } from './Compras/carrinho/carrinho.component';
import { AreaAdministrativaComponent } from './navegacao/area-administrativa/area-administrativa.component';
import { HomeComponent } from './navegacao/home/home.component';
import { SobreNosComponent } from './navegacao/sobre-nos/sobre-nos.component';
import { CriarProdutosComponent } from './Produtos/criar-produtos/criar-produtos.component';
import { DetalharProdutoComponent } from './Produtos/detalhar-produto/detalhar-produto.component';
import { EditarProdutosComponent } from './Produtos/editar-produtos/editar-produtos.component';
import { ListarProdutosHomeComponent } from './Produtos/listar-produtos-home/listar-produtos-home.component';
import { ListarProdutosPromoComponent } from './Produtos/listar-produtos-promo/listar-produtos-promo.component';
import { ListarProdutosComponent } from './Produtos/listar-produtos/listar-produtos.component';
import { CriarUsuariosComponent } from './Usuarios/criar-usuarios/criar-usuarios.component';
import { EditarUsuariosComponent } from './Usuarios/editar-usuarios/editar-usuarios.component';
import { ListarUsuariosComponent } from './Usuarios/listar-usuarios/listar-usuarios.component';
import { LoginComponent } from './Usuarios/login/login.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Area-Admnistrativa', component: AreaAdministrativaComponent },
  { path: 'Produtos', component: ListarProdutosComponent },
  { path: 'Criar-Produtos', component: CriarProdutosComponent },
  { path: 'Editar-Produtos/:id', component: EditarProdutosComponent },
  { path: 'Categorias', component: ListarCategoriasComponent },
  { path: 'Editar-Categorias/:id', component: EditarCategoriasComponent },
  { path: 'Criar-Categorias', component: CriarCategoriasComponent },
  { path: 'Produtos-Home', component: ListarProdutosHomeComponent },
  { path: 'Produtos-Categoria/:id', component: ListarProdutosCategoriasComponent },
  { path: 'Detalhes-Produto/:id', component: DetalharProdutoComponent },
  { path: 'Carrinho-Compras/:id', component: CarrinhoComponent },
  { path: 'Usuarios', component: ListarUsuariosComponent },
  { path: 'Editar-Usuarios/:id', component: EditarUsuariosComponent },
  { path: 'Criar-Usuarios', component: CriarUsuariosComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Sobre-Nos', component: SobreNosComponent },
  { path: 'Produtos-Promocao', component: ListarProdutosPromoComponent }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
