import { Component } from '@angular/core';

@Component({
    selector: 'app-alumnos',
    template: `
    <h1>Alumnos</h1>
    <b>nombre:</b>{{alumno.nombre}} 
        <br>
    <b>Apellido Paterno: </b>   {{alumno.apaterno}}
    <br>
    <b>Matricula: </b>   {{alumno.matricula}}
    <br>
    <b>Inscrito: </b>   {{alumno.Inscritro | currency}}
    <br>
    `,
    
})

export class NamesGrupos2{
    constructor(){}
    alumno = {
        matricula: 20002180,
        nombre: 'Daniel',
        apaterno: 'Ortega',
        Inscritro:2745.9,
        fechaNacimiento: new Date()
    };
}