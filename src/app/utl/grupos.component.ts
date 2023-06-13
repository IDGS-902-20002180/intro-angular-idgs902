import { Component } from "@angular/core";




@Component({
    //es con el nombre con el que vamos identificar a este componente
    selector: 'app-grupos',
    template: `<h1>Hola Gurpos UTL</h1>
                <form>
                    <label>Numero</label>
                    <input type="text" name="x" value="">
                    <button class="btn btn-primary">Calcular</button>
                    
                    </form>
                    ` ,
})
export class NamesGrupos{
    constructor(){

    }
}