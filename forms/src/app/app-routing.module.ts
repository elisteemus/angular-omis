import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatViewComponent } from './cat-view/cat-view.component';
import { CatComponent } from './cat/cat.component';
import { MainComponent } from './main/main.component';
import { NumbersComponent } from './numbers/numbers.component';
import { CatSelectComponent } from './cat-select/cat-select.component';
import { CatEditComponent } from './cat-edit/cat-edit.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'numbers', component: NumbersComponent },
  { path: 'cat', component: CatComponent },
  { path: 'cat/:id', component: CatViewComponent },
  { path: 'selected-cats', component: CatSelectComponent },
  { path: 'cat-edit/:id', component: CatEditComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
