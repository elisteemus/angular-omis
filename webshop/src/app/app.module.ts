import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './global/menu/menu.component';
import { FooterComponent } from './global/footer/footer.component';
import { HeaderComponent } from './global/header/header.component';
import { NotFoundComponent } from './global/not-found/not-found.component';
import { ItemListComponent } from './item/item-list/item-list.component';
import { ItemComponent } from './item/item.component';
import { ItemViewComponent } from './item/item-view/item-view.component';
import { ItemNewComponent } from './item/item-new/item-new.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { FilterUniquePipe } from './item/item-list/filter-unique.pipe';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { ItemEditComponent } from './item/item-edit/item-edit.component';
import { ItemAdminAllComponent } from './item/item-admin-all/item-admin-all.component'; 


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    ItemListComponent,
    ItemComponent,
    ItemViewComponent,
    ItemNewComponent,
    AuthenticationComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    FilterUniquePipe,
    ItemEditComponent,
    ItemAdminAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    AngularToastifyModule,
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule { }
