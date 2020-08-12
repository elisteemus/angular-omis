import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatViewComponent } from './cat-view/cat-view.component';
import { CatComponent } from './cat/cat.component';
import { MainComponent } from './main/main.component';
import { NumbersComponent } from './numbers/numbers.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'numbers', component: NumbersComponent },
  { path: 'cat', component: CatComponent },
  { path: 'cat/:id', component: CatViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
