import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoListaComponent } from './components/produto/produto-lista/produto-lista.component';
import { ProdutoFormComponent } from './components/produto/produto-form/produto-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/produtos', pathMatch: 'full' },
  { path: 'produtos', component: ProdutoListaComponent },
  { path: 'produto/novo', component: ProdutoFormComponent },
  { path: 'produto/editar/:id', component: ProdutoFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
