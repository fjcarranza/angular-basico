
import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{title}}</h1>
    <h3>La Base del contador es: <strong>{{base}}</strong></h3>

    <button (click)="contar(base)">{{base}}</button>
    <span>{{contador}}</span>
    <button (click)="contar(-base)">-{{base}}</button>
  `
})

export class ContadorComponent{
  title = 'Bases de Node';
  public base: number=5;
  public contador: number = 0;

  contar(valor: number){
    this.contador=this.contador+valor;
  }
}
