import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
//import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { Distancia2PComponentsComponent } from '../distancia2-pcomponents/distancia2-pcomponents.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    Distancia2PComponentsComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatRadioModule,
    MatButtonModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule,
  ],
  exports: [
    Distancia2PComponentsComponent
  ]
})
export class Distancia2PModule { }
