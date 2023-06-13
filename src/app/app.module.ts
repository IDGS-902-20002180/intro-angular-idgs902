import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamesGrupos } from './utl/grupos.component';
import { NamesGrupos2 } from './utl/grupos2.component';
import { IdgsComponent } from './utl/idgs/idgs.component';

@NgModule({
  declarations: [
    AppComponent,
    NamesGrupos,
    NamesGrupos2,
    IdgsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
