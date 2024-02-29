import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Grut']
  public heroeBorrado?: string;

  deleteLastHeroe():void{
    this.heroeBorrado = this.heroNames.pop()
    console.log(this.heroeBorrado);
  }
}
