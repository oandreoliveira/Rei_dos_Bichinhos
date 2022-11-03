import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './navegacao/menu/menu.component';
import { HomeComponent } from './navegacao/home/home.component';
import { FooterComponent } from './navegacao/footer/footer.component';
import { AreaAdministrativaComponent } from './navegacao/area-administrativa/area-administrativa.component';
import { ListarProdutosComponent } from './Produtos/listar-produtos/listar-produtos.component';
import { ListarCategoriasComponent } from './Categorias/listar-categorias/listar-categorias.component';
import { CategoriasService } from './Service/categorias.service';
import { ProdutosService } from './Service/produtos.service';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    AreaAdministrativaComponent,
    ListarProdutosComponent,
    ListarCategoriasComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CategoriasService,
    ProdutosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
