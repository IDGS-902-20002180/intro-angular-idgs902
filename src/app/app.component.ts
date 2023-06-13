import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro-angular-idgs902';
  alumno = {
    matricula: 123,
    nombre: 'Mario',
    apaterno: 'Lopez',
    Inscritro:2745.9,
    fechaNacimiento: new Date()
  };


  duplicaN(n:number):number{
    return n*2;
  }

}
