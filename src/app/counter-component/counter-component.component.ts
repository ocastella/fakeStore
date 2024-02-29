import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: '<h1>hola a todos</h1>',
  templateUrl: './counter-component.component.html',
  styleUrl: './counter-component.component.scss'
})
export class counterComponent {
  public counter: number = 10;

  incrementarBy(value: number):void{
    this.counter += value;
  }

  resetCounter(){
    this.counter = 10;
  }

  constructor() {}
}

