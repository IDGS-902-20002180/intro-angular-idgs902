import { Component } from '@angular/core';

@Component({
  selector: 'app-suma',
  templateUrl: './suma.component.html',
  styleUrls: ['./suma.component.css']
})
export class SumaComponent {

  // Declaración de variables
  //toma los valores de los inputs
  num1: number = 0;
  num2: number = 0;
  //toma el valor de la suma
  resultado: number = 0;
  // Método para sumar
  sumarNumeros(): void {
    
    this.resultado = this.num1 + this.num2;
    
  }
  


}
