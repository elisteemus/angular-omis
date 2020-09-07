import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NumbersComponent } from './numbers/numbers.component';
import { CatViewComponent } from './cat-view/cat-view.component';
import { CatComponent } from './cat/cat.component';
import { MainComponent } from './main/main.component';
import { ShortenPipe } from './cat-view/shorten.pipe';
import { MultiplicationPipe } from './numbers/multiplication.pipe';
import { CatSelectComponent } from './cat-select/cat-select.component';

@NgModule({
  declarations: [
    AppComponent,
    NumbersComponent,
    CatViewComponent,
    CatComponent,
    MainComponent,
    ShortenPipe,
    MultiplicationPipe,
    CatSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
