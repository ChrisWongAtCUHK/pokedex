import { Component } from '@angular/core';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pokemon : Pokemon = {
    id: 1,
    name: 'bulbasaur'
  }
}
