import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
