import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemNewComponent } from './item/item-new/item-new.component';
import { ItemViewComponent } from './item/item-view/item-view.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './global/not-found/not-found.component';
import { ItemEditComponent } from './item/item-edit/item-edit.component';
import { ItemAdminAllComponent } from './item/item-admin-all/item-admin-all.component';

const routes: Routes = [
  { path: '', component: ItemListComponent },
  { path: 'item/new', component: ItemNewComponent },
  { path: 'item/all', component: ItemAdminAllComponent },
  { path: 'item/:itemId', component: ItemViewComponent },
  { path: 'item/edit/:itemId', component: ItemEditComponent},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'registrate', redirectTo: "signup" },
  { path: 'cart', component: CartComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
