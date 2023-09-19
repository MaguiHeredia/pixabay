import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { CardsComponent } from './components/cards/cards.component';
import { ChangeFrontPageComponent } from './components/change-front-page/change-front-page.component';
import { FrontPageComponent } from './components/front-page/front-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchbarComponent,
    CardsComponent,
    ChangeFrontPageComponent,
    FrontPageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
