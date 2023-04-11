import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{

    public nombre: string = 'Ironman';
    public edad:   number = 45;

    obterNombre():string{
        return `${this.nombre} - ${ this.edad}`;
   }

   get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
   }

   cambiarNombre():void{
    this.nombre="Spiderman"
   }

   cambiarEdad():void{
    this.edad=18;
   }
}
