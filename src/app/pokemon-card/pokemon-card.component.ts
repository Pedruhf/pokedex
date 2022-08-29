import { Component, Input } from '@angular/core';
import { PokemonModel } from "../models";

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {
  @Input()
  pokemon!: PokemonModel;

  constructor() { }

  public getPokemonImageUrl(pokemonUrl: string): string {
    const id = pokemonUrl.split("/").at(-2);
    const formattedId = id?.padStart(3, "0")
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formattedId}.png`;
  }
}
