import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  _pokemons : Pokemon[];
  pokemons : Pokemon[];
  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
    this.pokemonService.getPokemons().subscribe((data: any) =>
    {
      this._pokemons = data.results.map((pokemon: any) => {
        let { url } = pokemon;
        pokemon.id = url.substring(34, url.length - 1);
        return pokemon;
      })

      this.pokemons = this._pokemons;
    });
  }

  filterPokemons(searchString: string) {
    this.pokemons = this._pokemons.filter(pokemon => {
      return pokemon.name.includes(searchString.toLowerCase());
    });
  }
}
