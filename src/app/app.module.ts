import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamesGrupos } from './utl/grupos.component';
import { NamesGrupos2 } from './utl/grupos2.component';
import { IdgsComponent } from './utl/idgs/idgs.component';
import { IricComponent } from './utl/iric/iric.component';
import { MenuComponent } from './utl/menu/menu.component';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { OperasModule } from './utl/formularios/operas/operas.module';
import { Distancia2PModule } from '../app/distancia2-p/distancia2-p.module';

@NgModule({
  declarations: [
    AppComponent,
    NamesGrupos,
    NamesGrupos2,
    IdgsComponent,
    IricComponent,
    MenuComponent,
    SumaComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    OperasModule,
    Distancia2PModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
