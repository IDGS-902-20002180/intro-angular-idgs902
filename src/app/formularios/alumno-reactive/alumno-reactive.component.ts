import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-alumno-reactive',
  templateUrl: './alumno-reactive.component.html',
  styleUrls: ['./alumno-reactive.component.css']
})
export class AlumnoReactiveComponent {

  alumnosForm!:FormGroup;
  constructor(private readonly fb:FormBuilder) {
    this.alumnosForm = this.initForm();
    
  }
  arregloAlumnos:any[]=[];
  onSubmit(){
    //console.log('Form-> ',this.alumnosForm.value);
    this.obtenerValor();
    
  }

  obtenerValor(){
    const mat=this.alumnosForm.get('matricula')?.value;
    const nom=this.alumnosForm.get('nombre')?.value;
    console.log('matricula:',mat);
    console.log('nombre:',nom);
    const eda=this.alumnosForm.get('edad')?.value;
    const cor=this.alumnosForm.get('correo')?.value;
    const fot=this.alumnosForm.get('foto')?.value;
    const cal=this.alumnosForm.get('calif')?.value;
    this.arregloAlumnos.push(this.alumnosForm.value);
  }

  

  //De esta forma se puede acceder a los controles del formulario
  initForm():FormGroup{
    return this.fb.group({
      matricula:['',[Validators.required,Validators.minLength(3)]],
      nombre:['',[Validators.required,]],
      edad:['',[Validators.required,]],
      correo:['',[Validators.required,]],
      foto:['',[Validators.required,]],
      calif:['',[Validators.required,]]
    });
  }
}
