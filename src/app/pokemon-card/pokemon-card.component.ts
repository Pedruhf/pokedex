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

  getPokemonImage(): string {
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${this.pokemon.id}.png`;
  }
}
